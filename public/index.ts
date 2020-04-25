import { init, RendererWebGL, DefaultParticleSystem } from '@wufe/particles';
import { QuadTreeFeatureBuilder } from '../src/webgl/quadtree/quadtree-feature';
import { QuadTreeProximityDetectionSystem } from '../src/quad-tree-proximity-detection-system';

init({
    selectorOrCanvas: '#canvas',
    renderer: RendererWebGL,
    systems: [DefaultParticleSystem],
    features: [
        QuadTreeFeatureBuilder.build({
            color: [0, 0, 0, .4]
        })
    ],
    camera: {
        enabled: true,
        zoom: {
            value: 7,
            locked: false
        }
    },
    fpsLimit: 120,
    proximityDetectionSystem: QuadTreeProximityDetectionSystem,
    events: {
        resize: {
            enabled: true,
            debounce: -1
        }
    }
})