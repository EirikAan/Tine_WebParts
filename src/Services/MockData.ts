interface ITermStoreItem {
    
}

export class TermStoreMockData {
    private static _item: ITermStoreItem[] = [{}];

    public static Get(): Promise<ITermStoreItem[]> {
        return new Promise<ITermStoreItem[]>((resolve) => {
            resolve(this._item);
        });
    }
}