import { init, DefaultParticleSystemBuilder, RendererWebGLBuilder } from '@wufe/particles';
import { QuadTreeFeatureBuilder } from '../src/webgl/quadtree/quadtree-feature';
import { QuadTreeProximityDetectionSystem, QuadTreeProximityDetectionSystemBuilder } from '../src/quad-tree-proximity-detection-system';

init({
    selectorOrCanvas: '#canvas',
    renderer: RendererWebGLBuilder.build(),
    systems: [DefaultParticleSystemBuilder.build({
        color: [46, 52, 64, 1],
        size: { randomize: true, boundary: { min: 10, max: 20 }}
    })],
    features: [
        QuadTreeFeatureBuilder.build({
            color: [0, 0, 0, .3]
        })
    ],
    camera: {
        enabled: true,
        zoom: {
            value: 7,
            locked: false
        },
        depthOfField: true
    },
    fpsLimit: 30,
    proximityDetection: {
        system: QuadTreeProximityDetectionSystemBuilder.build()
    },
    events: {
        resize: {
            enabled: true,
            debounce: -1
        }
    }
})