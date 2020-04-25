$demoDistPath = "dist-demo"
if (Test-Path -Path $demoDistPath) {
    Remove-Item -Recurse -Force $demoDistPath
}
yarn demo:build:production
ssh do 'mkdir -p /home/quadtree.particles'
ssh do 'rm -rf /home/quadtree.particles/*'
scp -r $demoDistPath/* do:/home/quadtree.particles
ssh do 'chmod -R 777 /home/quadtree.particles'