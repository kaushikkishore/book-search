export class QueryBookDto {
  constructor(
    public readonly tittle: string,
    public readonly isbn: string,
    public readonly status: string,
    public readonly author: string,
    public readonly category: string,
    public readonly date: Date,
    public readonly pageIndex: number,
    public readonly pageSize: number,
    public readonly sortOrder: SortOrder,
  ) {}
}

enum SortOrder {
  ASC = 1,
  DESC = 2,
}
