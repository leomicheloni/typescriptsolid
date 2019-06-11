export interface Repository<T> {
    Save<T>(entity: T);
    GetAll<T>(): Array<T>;
    GetById<T>(id: any): T;
}