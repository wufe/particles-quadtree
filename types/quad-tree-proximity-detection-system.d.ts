import { IProximityDetectionSystem, ILibraryInterface, IParticle } from "@wufe/particles";
import { QuadTree } from "./quad-tree";
export declare class QuadTreeProximityDetectionSystem implements IProximityDetectionSystem {
    private _manager;
    constructor(_manager: ILibraryInterface);
    quadTree: QuadTree | null;
    init(): void;
    update(objects: IParticle[]): void;
    getNeighbours(object: IParticle, radius?: number): IParticle[];
    private _getDistance;
}
