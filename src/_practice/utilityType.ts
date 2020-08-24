type Partial2<T> = {
    [k in keyof T]-?: T[k];
};
