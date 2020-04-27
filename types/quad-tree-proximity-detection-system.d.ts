import { IProximityDetectionSystem, ILibraryInterface, IParticle, TProximityDetectionSystemBuilder, RecursivePartial } from "@wufe/particles";
import { QuadTree } from "./quad-tree";
declare type TQuadTreeProximityDetectionSystemParams = {
    radius: number;
};
export declare class QuadTreeProximityDetectionSystemBuilder {
    static build: (partialParams?: RecursivePartial<TQuadTreeProximityDetectionSystemParams>) => TProximityDetectionSystemBuilder;
}
export declare class QuadTreeProximityDetectionSystem implements IProximityDetectionSystem {
    private _manager;
    private _params;
    constructor(_manager: ILibraryInterface, _params: TQuadTreeProximityDetectionSystemParams);
    quadTree: QuadTree | null;
    init(): void;
    update(objects: IParticle[]): void;
    getNeighbours(object: IParticle, radius?: number): IParticle[];
    private _getDistance;
}
export {};
