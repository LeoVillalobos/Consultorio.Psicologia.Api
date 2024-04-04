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
  createdAt: string;
  createdBy: string;
  createdOn: Date;
}
