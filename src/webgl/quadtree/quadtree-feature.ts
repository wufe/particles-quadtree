import { RecursivePartial, TFeatureBuilder, getDefault, ILibraryInterface, IFeature, ViewBox, IWebGLLibraryInterface } from '@wufe/particles';
import { QuadTreeProgram } from './quadtree-program';
import { QuadTreeProximityDetectionSystem } from '../../quad-tree-proximity-detection-system';

export type TQuadTreeFeatureParams = {
    color: number[];
}

export class QuadTreeFeatureBuilder {
    static build = (partialParams?: RecursivePartial<TQuadTreeFeatureParams>): TFeatureBuilder => ({
        build: (manager: ILibraryInterface) => new QuadTreeFeature(manager, getDefault(partialParams, {
            color: [255, 229, 104, .21]
        }))
    })
}

class QuadTreeFeature implements IFeature {

    private _program: QuadTreeProgram;

    constructor(private _manager: ILibraryInterface, private _params: TQuadTreeFeatureParams) {}
    
    isAvailable() {
        return this._manager.params.proximityDetectionSystem === QuadTreeProximityDetectionSystem;
    }
    
    buildProgram(gl: WebGLRenderingContext, viewBox: ViewBox, libraryInterface: IWebGLLibraryInterface, ...args: any[]) {
        this._program = new QuadTreeProgram(gl, viewBox, libraryInterface, this._params);
        return this;
    }

    getProgram() {
        return this._program;
    }
}