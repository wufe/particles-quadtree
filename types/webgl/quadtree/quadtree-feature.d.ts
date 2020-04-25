import { RecursivePartial, TFeatureBuilder } from '@wufe/particles';
export declare type TQuadTreeFeatureParams = {
    color: number[];
};
export declare class QuadTreeFeatureBuilder {
    static build: (partialParams?: RecursivePartial<TQuadTreeFeatureParams>) => TFeatureBuilder;
}
