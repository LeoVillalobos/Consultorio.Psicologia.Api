/**
 *
 */
export interface IEntity {
  id?: string;
}

/**
 *
 */
export interface IAuditable extends IEntity {
  createdAt: Date;
  createdBy: string;
  createdOn: Date;
}
