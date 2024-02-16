/* eslint-disable */
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Long: { input: any; output: any; }
  OffsetDateTime: { input: any; output: any; }
};

export type AddressEntity = {
  __typename?: 'AddressEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  houseNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  place?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<SuburbEntity>;
};

export type AddressEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  houseNumber?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<SuburbEntityInput>;
};

export type AdminFooterItemEntity = {
  __typename?: 'AdminFooterItemEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<AdminFooterParentEntity>;
  translatables?: Maybe<Array<Maybe<AdminFooterItemTranslatableEntity>>>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AdminFooterItemEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<AdminFooterParentEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<AdminFooterItemTranslatableEntityInput>>>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AdminFooterItemTranslatableEntity = {
  __typename?: 'AdminFooterItemTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AdminFooterItemTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AdminFooterParentEntity = {
  __typename?: 'AdminFooterParentEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<AdminFooterItemEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<AdminFooterParentTranslatableEntity>>>;
};

export type AdminFooterParentEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<AdminFooterItemEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<AdminFooterParentTranslatableEntityInput>>>;
};

export type AdminFooterParentTranslatableEntity = {
  __typename?: 'AdminFooterParentTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AdminFooterParentTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AnalyticsDto = {
  __typename?: 'AnalyticsDto';
  average?: Maybe<Scalars['Float']['output']>;
  entryOperation?: Maybe<AnalyticsOperation>;
  name?: Maybe<Scalars['String']['output']>;
  series?: Maybe<Array<Maybe<AnalyticsEntry>>>;
  sum?: Maybe<Scalars['Float']['output']>;
};

export type AnalyticsEntry = {
  __typename?: 'AnalyticsEntry';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export enum AnalyticsOperation {
  Avg = 'AVG',
  Count = 'COUNT',
  Max = 'MAX',
  Min = 'MIN',
  Sum = 'SUM'
}

export type AppEntity = {
  __typename?: 'AppEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  platform?: Maybe<AppPlatformEntity>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AppEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  platform?: InputMaybe<AppPlatformEntityInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AppPlatformEntity = {
  __typename?: 'AppPlatformEntity';
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AppPlatformEntityInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleCategoryEntity = {
  __typename?: 'ArticleCategoryEntity';
  articles?: Maybe<Array<Maybe<ArticleEntity>>>;
  color?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<ArticleCategoryTranslatableEntity>>>;
};

export type ArticleCategoryEntityInput = {
  articles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<ArticleCategoryTranslatableEntityInput>>>;
};

export type ArticleCategoryTranslatableEntity = {
  __typename?: 'ArticleCategoryTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ArticleCategoryTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleCommentEntity = {
  __typename?: 'ArticleCommentEntity';
  article?: Maybe<ArticleEntity>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  translatables?: Maybe<Array<Maybe<ArticleCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type ArticleCommentEntityInput = {
  article?: InputMaybe<ArticleEntityInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<ArticleCommentTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type ArticleCommentTranslatableEntity = {
  __typename?: 'ArticleCommentTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type ArticleCommentTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  approved?: Maybe<Scalars['Boolean']['output']>;
  author?: Maybe<UserContextEntity>;
  captchaToken?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ArticleCategoryEntity>;
  comments?: Maybe<Array<Maybe<ArticleCommentEntity>>>;
  commentsAllowed?: Maybe<Scalars['Boolean']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  favoritingUsers?: Maybe<Array<Maybe<UserContextEntity>>>;
  id?: Maybe<Scalars['String']['output']>;
  lastArticleComment?: Maybe<ArticleCommentEntity>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publicAuthor?: Maybe<ArticlePublicAuthorEntity>;
  ratingDistribution?: Maybe<AnalyticsDto>;
  ratingStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  ratings?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  searchStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sponsored?: Maybe<Scalars['Boolean']['output']>;
  translatables?: Maybe<Array<Maybe<ArticleTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<ArticleMediaEntity>>>;
  visitorStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  visitors?: Maybe<Array<Maybe<ArticleVisitorEntity>>>;
};


export type ArticleEntityRatingDistributionArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type ArticleEntityRatingStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type ArticleEntitySearchStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type ArticleEntityVisitorStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type ArticleEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  author?: InputMaybe<UserContextEntityInput>;
  captchaToken?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<ArticleCategoryEntityInput>;
  comments?: InputMaybe<Array<InputMaybe<ArticleCommentEntityInput>>>;
  commentsAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  favoritingUsers?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicAuthor?: InputMaybe<ArticlePublicAuthorEntityInput>;
  ratings?: InputMaybe<Array<InputMaybe<ArticleRatingEntityInput>>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sponsored?: InputMaybe<Scalars['Boolean']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<ArticleTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<ArticleMediaEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<ArticleVisitorEntityInput>>>;
};

export type ArticleMediaEntity = {
  __typename?: 'ArticleMediaEntity';
  article?: Maybe<ArticleEntity>;
  card?: Maybe<Scalars['Boolean']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type ArticleMediaEntityInput = {
  article?: InputMaybe<ArticleEntityInput>;
  card?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticlePublicAuthorEntity = {
  __typename?: 'ArticlePublicAuthorEntity';
  articles?: Maybe<Array<Maybe<ArticleEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type ArticlePublicAuthorEntityInput = {
  articles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleRatingEntity = {
  __typename?: 'ArticleRatingEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<ArticleEntity>;
  score?: Maybe<Scalars['Int']['output']>;
  userContext?: Maybe<UserContextEntity>;
};

export type ArticleRatingEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  parent?: InputMaybe<ArticleEntityInput>;
  score?: InputMaybe<Scalars['Int']['input']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type ArticleTranslatableEntity = {
  __typename?: 'ArticleTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
};

export type ArticleTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleVisitorEntity = {
  __typename?: 'ArticleVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<ArticleEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']['output']>;
};

export type ArticleVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  visits?: InputMaybe<Scalars['Int']['input']>;
};

export type ChannelEntity = {
  __typename?: 'ChannelEntity';
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ChannelEntityInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigurationEntity = {
  __typename?: 'ConfigurationEntity';
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ConfigurationEntityInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum ConjunctionOperator {
  And = 'AND',
  AndNot = 'AND_NOT',
  Or = 'OR',
  OrNot = 'OR_NOT'
}

export type ContactEntity = {
  __typename?: 'ContactEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  preferredContact?: Maybe<Scalars['Boolean']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ContactEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  preferredContact?: InputMaybe<Scalars['Boolean']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type ContestCommentEntity = {
  __typename?: 'ContestCommentEntity';
  content?: Maybe<Scalars['String']['output']>;
  contest?: Maybe<ContestEntity>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  translatables?: Maybe<Array<Maybe<ContestCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type ContestCommentEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contest?: InputMaybe<ContestEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<ContestCommentTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type ContestCommentTranslatableEntity = {
  __typename?: 'ContestCommentTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type ContestCommentTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type ContestEntity = {
  __typename?: 'ContestEntity';
  comments?: Maybe<Array<Maybe<ContestCommentEntity>>>;
  commentsAllowed?: Maybe<Scalars['Boolean']['output']>;
  contact?: Maybe<ContactEntity>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastContestComment?: Maybe<ContestCommentEntity>;
  maxParticipations?: Maybe<Scalars['Int']['output']>;
  maxVotes?: Maybe<Scalars['Int']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  participationApproval?: Maybe<Scalars['Boolean']['output']>;
  participationEndDate?: Maybe<Scalars['OffsetDateTime']['output']>;
  participations?: Maybe<Array<Maybe<ContestParticipationEntity>>>;
  searchStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sponsored?: Maybe<Scalars['Boolean']['output']>;
  translatables?: Maybe<Array<Maybe<ContestTranslatableEntity>>>;
  type?: Maybe<ContestTypeEntity>;
  uploads?: Maybe<Array<Maybe<ContestMediaEntity>>>;
  voteEndDate?: Maybe<Scalars['OffsetDateTime']['output']>;
};


export type ContestEntitySearchStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type ContestEntityInput = {
  comments?: InputMaybe<Array<InputMaybe<ContestCommentEntityInput>>>;
  commentsAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  contact?: InputMaybe<ContactEntityInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxParticipations?: InputMaybe<Scalars['Int']['input']>;
  maxVotes?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  participationApproval?: InputMaybe<Scalars['Boolean']['input']>;
  participationEndDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  participations?: InputMaybe<Array<InputMaybe<ContestParticipationEntityInput>>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sponsored?: InputMaybe<Scalars['Boolean']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<ContestTranslatableEntityInput>>>;
  type?: InputMaybe<ContestTypeEntityInput>;
  uploads?: InputMaybe<Array<InputMaybe<ContestMediaEntityInput>>>;
  voteEndDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type ContestMediaEntity = {
  __typename?: 'ContestMediaEntity';
  card?: Maybe<Scalars['Boolean']['output']>;
  contest?: Maybe<ContestEntity>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type ContestMediaEntityInput = {
  card?: InputMaybe<Scalars['Boolean']['input']>;
  contest?: InputMaybe<ContestEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContestParticipationEntity = {
  __typename?: 'ContestParticipationEntity';
  approved?: Maybe<Scalars['Boolean']['output']>;
  contest?: Maybe<ContestEntity>;
  contestVotes?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mediaSubmissions?: Maybe<Array<Maybe<ContestParticipationMediaEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  placement?: Maybe<Scalars['Int']['output']>;
  textSubmission?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<ContestParticipationTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
  voteAmount?: Maybe<Scalars['Int']['output']>;
};

export type ContestParticipationEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  contest?: InputMaybe<ContestEntityInput>;
  contestVotes?: InputMaybe<Array<InputMaybe<ContestVoteEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mediaSubmissions?: InputMaybe<Array<InputMaybe<ContestParticipationMediaEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  placement?: InputMaybe<Scalars['Int']['input']>;
  textSubmission?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<ContestParticipationTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
  voteAmount?: InputMaybe<Scalars['Int']['input']>;
};

export type ContestParticipationMediaEntity = {
  __typename?: 'ContestParticipationMediaEntity';
  contestParticipation?: Maybe<ContestParticipationEntity>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type ContestParticipationMediaEntityInput = {
  contestParticipation?: InputMaybe<ContestParticipationEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type ContestParticipationTranslatableEntity = {
  __typename?: 'ContestParticipationTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  textSubmission?: Maybe<Scalars['String']['output']>;
};

export type ContestParticipationTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  textSubmission?: InputMaybe<Scalars['String']['input']>;
};

export type ContestTranslatableEntity = {
  __typename?: 'ContestTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
};

export type ContestTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type ContestTypeEntity = {
  __typename?: 'ContestTypeEntity';
  code?: Maybe<Scalars['String']['output']>;
  contests?: Maybe<Array<Maybe<ContestEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<ContestTypeTranslatableEntity>>>;
};

export type ContestTypeEntityInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  contests?: InputMaybe<Array<InputMaybe<ContestEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<ContestTypeTranslatableEntityInput>>>;
};

export type ContestTypeTranslatableEntity = {
  __typename?: 'ContestTypeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ContestTypeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ContestVoteEntity = {
  __typename?: 'ContestVoteEntity';
  contestParticipation?: Maybe<ContestParticipationEntity>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  userContext?: Maybe<UserContextEntity>;
};

export type ContestVoteEntityInput = {
  contestParticipation?: InputMaybe<ContestParticipationEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type DealCategoryEntity = {
  __typename?: 'DealCategoryEntity';
  color?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  deals?: Maybe<Array<Maybe<DealEntity>>>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<DealCategoryTranslatableEntity>>>;
};

export type DealCategoryEntityInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  deals?: InputMaybe<Array<InputMaybe<DealEntityInput>>>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<DealCategoryTranslatableEntityInput>>>;
};

export type DealCategoryTranslatableEntity = {
  __typename?: 'DealCategoryTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DealCategoryTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DealEntity = {
  __typename?: 'DealEntity';
  address?: Maybe<AddressEntity>;
  category?: Maybe<DealCategoryEntity>;
  contact?: Maybe<ContactEntity>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  creator?: Maybe<UserContextEntity>;
  favoritingUsers?: Maybe<Array<Maybe<UserContextEntity>>>;
  id?: Maybe<Scalars['String']['output']>;
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  offer?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  searchStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sponsored?: Maybe<Scalars['Boolean']['output']>;
  translatables?: Maybe<Array<Maybe<DealTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<DealMediaEntity>>>;
  visitorStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  visitors?: Maybe<Array<Maybe<DealVisitorEntity>>>;
};


export type DealEntitySearchStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type DealEntityVisitorStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type DealEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  category?: InputMaybe<DealCategoryEntityInput>;
  contact?: InputMaybe<ContactEntityInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  creator?: InputMaybe<UserContextEntityInput>;
  favoritingUsers?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offer?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sponsored?: InputMaybe<Scalars['Boolean']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<DealTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<DealMediaEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<DealVisitorEntityInput>>>;
};

export type DealMediaEntity = {
  __typename?: 'DealMediaEntity';
  card?: Maybe<Scalars['Boolean']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  deal?: Maybe<DealEntity>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type DealMediaEntityInput = {
  card?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  deal?: InputMaybe<DealEntityInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DealTranslatableEntity = {
  __typename?: 'DealTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
};

export type DealTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type DealVisitorEntity = {
  __typename?: 'DealVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<DealEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']['output']>;
};

export type DealVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  visits?: InputMaybe<Scalars['Int']['input']>;
};

export type ErrorMessageEntity = {
  __typename?: 'ErrorMessageEntity';
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  message?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type ErrorMessageEntityInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<LanguageEntityInput>;
  message?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type EventAttendeeConfigurationEntity = {
  __typename?: 'EventAttendeeConfigurationEntity';
  approval?: Maybe<Scalars['Boolean']['output']>;
  attendees?: Maybe<Array<Maybe<EventAttendeeEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  id?: Maybe<Scalars['String']['output']>;
  maxAttendees?: Maybe<Scalars['Int']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type EventAttendeeConfigurationEntityInput = {
  approval?: InputMaybe<Scalars['Boolean']['input']>;
  attendees?: InputMaybe<Array<InputMaybe<EventAttendeeEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxAttendees?: InputMaybe<Scalars['Int']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type EventAttendeeEntity = {
  __typename?: 'EventAttendeeEntity';
  approved?: Maybe<Scalars['Boolean']['output']>;
  configuration?: Maybe<EventAttendeeConfigurationEntity>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  userContext?: Maybe<UserContextEntity>;
};

export type EventAttendeeEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  configuration?: InputMaybe<EventAttendeeConfigurationEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type EventCategoryEntity = {
  __typename?: 'EventCategoryEntity';
  color?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<EventCategoryTranslatableEntity>>>;
};

export type EventCategoryEntityInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<EventCategoryTranslatableEntityInput>>>;
};

export type EventCategoryTranslatableEntity = {
  __typename?: 'EventCategoryTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type EventCategoryTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EventCommentEntity = {
  __typename?: 'EventCommentEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  translatables?: Maybe<Array<Maybe<EventCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type EventCommentEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<EventCommentTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type EventCommentTranslatableEntity = {
  __typename?: 'EventCommentTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type EventCommentTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type EventEntity = {
  __typename?: 'EventEntity';
  address?: Maybe<AddressEntity>;
  attendeeConfiguration?: Maybe<EventAttendeeConfigurationEntity>;
  category?: Maybe<EventCategoryEntity>;
  comments?: Maybe<Array<Maybe<EventCommentEntity>>>;
  commentsAllowed?: Maybe<Scalars['Boolean']['output']>;
  contact?: Maybe<ContactEntity>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  creator?: Maybe<UserContextEntity>;
  entryFee?: Maybe<Scalars['Float']['output']>;
  favoritingUsers?: Maybe<Array<Maybe<UserContextEntity>>>;
  hasSchedules?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastEventComment?: Maybe<EventCommentEntity>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organisation?: Maybe<OrganisationEntity>;
  ratingDistribution?: Maybe<AnalyticsDto>;
  ratingStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  ratings?: Maybe<Array<Maybe<EventRatingEntity>>>;
  schedule?: Maybe<EventScheduleEntity>;
  schedules?: Maybe<Array<Maybe<EventScheduleEntity>>>;
  searchStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sponsored?: Maybe<Scalars['Boolean']['output']>;
  targetGroups?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  translatables?: Maybe<Array<Maybe<EventTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<EventMediaEntity>>>;
  videoChatLink?: Maybe<Scalars['String']['output']>;
  visitorStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  visitors?: Maybe<Array<Maybe<EventVisitorEntity>>>;
};


export type EventEntityRatingDistributionArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type EventEntityRatingStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type EventEntityScheduleArgs = {
  begin?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  end?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type EventEntitySearchStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type EventEntityVisitorStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type EventEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  attendeeConfiguration?: InputMaybe<EventAttendeeConfigurationEntityInput>;
  category?: InputMaybe<EventCategoryEntityInput>;
  comments?: InputMaybe<Array<InputMaybe<EventCommentEntityInput>>>;
  commentsAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  contact?: InputMaybe<ContactEntityInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  creator?: InputMaybe<UserContextEntityInput>;
  entryFee?: InputMaybe<Scalars['Float']['input']>;
  favoritingUsers?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  ratings?: InputMaybe<Array<InputMaybe<EventRatingEntityInput>>>;
  schedules?: InputMaybe<Array<InputMaybe<EventScheduleEntityInput>>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sponsored?: InputMaybe<Scalars['Boolean']['input']>;
  targetGroups?: InputMaybe<Array<InputMaybe<EventTargetGroupEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<EventTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<EventMediaEntityInput>>>;
  videoChatLink?: InputMaybe<Scalars['String']['input']>;
  visitors?: InputMaybe<Array<InputMaybe<EventVisitorEntityInput>>>;
};

export type EventMediaEntity = {
  __typename?: 'EventMediaEntity';
  card?: Maybe<Scalars['Boolean']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type EventMediaEntityInput = {
  card?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventRatingEntity = {
  __typename?: 'EventRatingEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<EventEntity>;
  score?: Maybe<Scalars['Int']['output']>;
  userContext?: Maybe<UserContextEntity>;
};

export type EventRatingEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  parent?: InputMaybe<EventEntityInput>;
  score?: InputMaybe<Scalars['Int']['input']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type EventScheduleEntity = {
  __typename?: 'EventScheduleEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  endDate?: Maybe<Scalars['OffsetDateTime']['output']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  startDate?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type EventScheduleEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type EventTargetGroupEntity = {
  __typename?: 'EventTargetGroupEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<EventTargetGroupTranslatableEntity>>>;
};

export type EventTargetGroupEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<EventTargetGroupTranslatableEntityInput>>>;
};

export type EventTargetGroupTranslatableEntity = {
  __typename?: 'EventTargetGroupTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type EventTargetGroupTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EventTranslatableEntity = {
  __typename?: 'EventTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
};

export type EventTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type EventVisitorEntity = {
  __typename?: 'EventVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<EventEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']['output']>;
};

export type EventVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  visits?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterSortPaginateInput = {
  dir?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<QueryExpressionInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type FormTemplateTypeEntity = {
  __typename?: 'FormTemplateTypeEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<FormTemplateTypeTranslatableEntity>>>;
};

export type FormTemplateTypeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<FormTemplateTypeTranslatableEntityInput>>>;
};

export type FormTemplateTypeTranslatableEntity = {
  __typename?: 'FormTemplateTypeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FormTemplateTypeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FriendEntity = {
  __typename?: 'FriendEntity';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  addressee?: Maybe<UserContextEntity>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  requester?: Maybe<UserContextEntity>;
};

export type FriendEntityInput = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  addressee?: InputMaybe<UserContextEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  requester?: InputMaybe<UserContextEntityInput>;
};

export type InfoMediaCategoryEntity = {
  __typename?: 'InfoMediaCategoryEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  infoMedia?: Maybe<Array<Maybe<InfoMediaEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<InfoMediaCategoryTranslatableEntity>>>;
};

export type InfoMediaCategoryEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  infoMedia?: InputMaybe<Array<InputMaybe<InfoMediaEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<InfoMediaCategoryTranslatableEntityInput>>>;
};

export type InfoMediaCategoryTranslatableEntity = {
  __typename?: 'InfoMediaCategoryTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type InfoMediaCategoryTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InfoMediaEntity = {
  __typename?: 'InfoMediaEntity';
  category?: Maybe<InfoMediaCategoryEntity>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type InfoMediaEntityInput = {
  category?: InputMaybe<InfoMediaCategoryEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type InformationDto = {
  __typename?: 'InformationDto';
  version?: Maybe<Scalars['String']['output']>;
};

export enum IntervalFilter {
  CalendarWeeks = 'CALENDAR_WEEKS',
  Daily = 'DAILY',
  Monthly = 'MONTHLY'
}

export type LabelEntity = {
  __typename?: 'LabelEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  tagId?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<LabelTranslatablesEntity>>>;
};

export type LabelEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  tagId?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<LabelTranslatablesEntityInput>>>;
};

export type LabelTranslatablesEntity = {
  __typename?: 'LabelTranslatablesEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type LabelTranslatablesEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type LanguageEntity = {
  __typename?: 'LanguageEntity';
  active?: Maybe<Scalars['Boolean']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type LanguageEntityInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MediaAttributionEntity = {
  __typename?: 'MediaAttributionEntity';
  author?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MediaAttributionEntityInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  license?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  attribution?: Maybe<MediaAttributionEntity>;
  base64?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Long']['output']>;
  thumbnail?: Maybe<MediaEntity>;
  url?: Maybe<Scalars['String']['output']>;
};

export type MediaEntityInput = {
  attribution?: InputMaybe<MediaAttributionEntityInput>;
  base64?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  extension?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Long']['input']>;
  thumbnail?: InputMaybe<MediaEntityInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemEntity = {
  __typename?: 'MenuItemEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  header?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<PageEntity>;
  parent?: Maybe<MenuItemEntity>;
  plugin?: Maybe<PluginEntity>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  subMenuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  translatables?: Maybe<Array<Maybe<MenuItemTranslatableEntity>>>;
};

export type MenuItemEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  header?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<PageEntityInput>;
  parent?: InputMaybe<MenuItemEntityInput>;
  plugin?: InputMaybe<PluginEntityInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  subMenuItems?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<MenuItemTranslatableEntityInput>>>;
};

export type MenuItemTranslatableEntity = {
  __typename?: 'MenuItemTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
};

export type MenuItemTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type MessageDefinitionEntity = {
  __typename?: 'MessageDefinitionEntity';
  channels?: Maybe<Array<Maybe<ChannelEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  template?: Maybe<MessageTemplateEntity>;
  translatables?: Maybe<Array<Maybe<MessageDefinitionTranslatableEntity>>>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type MessageDefinitionEntityInput = {
  channels?: InputMaybe<Array<InputMaybe<ChannelEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  template?: InputMaybe<MessageTemplateEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<MessageDefinitionTranslatableEntityInput>>>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type MessageDefinitionTranslatableEntity = {
  __typename?: 'MessageDefinitionTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<MessageDefinitionEntity>;
};

export type MessageDefinitionTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<MessageDefinitionEntityInput>;
};

export type MessageTemplateEntity = {
  __typename?: 'MessageTemplateEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  definitions?: Maybe<Array<Maybe<MessageDefinitionEntity>>>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<MessageTemplateTranslatableEntity>>>;
};

export type MessageTemplateEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  definitions?: InputMaybe<Array<InputMaybe<MessageDefinitionEntityInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<MessageTemplateTranslatableEntityInput>>>;
};

export type MessageTemplateTranslatableEntity = {
  __typename?: 'MessageTemplateTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<MessageTemplateEntity>;
};

export type MessageTemplateTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  parent?: InputMaybe<MessageTemplateEntityInput>;
};

export type MilestoneElementEntity = {
  __typename?: 'MilestoneElementEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  milestone?: Maybe<MilestoneEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<MilestoneElementTranslatableEntity>>>;
};

export type MilestoneElementEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  milestone?: InputMaybe<MilestoneEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<MilestoneElementTranslatableEntityInput>>>;
};

export type MilestoneElementTranslatableEntity = {
  __typename?: 'MilestoneElementTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MilestoneElementTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MilestoneEntity = {
  __typename?: 'MilestoneEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  elements?: Maybe<Array<Maybe<MilestoneElementEntity>>>;
  endDate?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<MilestoneTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<MilestoneMediaEntity>>>;
};

export type MilestoneEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  elements?: InputMaybe<Array<InputMaybe<MilestoneElementEntityInput>>>;
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<MilestoneTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<MilestoneMediaEntityInput>>>;
};

export type MilestoneMediaEntity = {
  __typename?: 'MilestoneMediaEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  milestone?: Maybe<MilestoneEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type MilestoneMediaEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  milestone?: InputMaybe<MilestoneEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type MilestoneTranslatableEntity = {
  __typename?: 'MilestoneTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MilestoneTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  addFavoriteArticle?: Maybe<UserContextEntity>;
  addFavoriteAuthor?: Maybe<UserContextEntity>;
  addFavoriteDeal?: Maybe<UserContextEntity>;
  addFavoriteEvent?: Maybe<UserContextEntity>;
  addFavoriteOrganisation?: Maybe<UserContextEntity>;
  addUser?: Maybe<Scalars['Boolean']['output']>;
  assignLandingPage?: Maybe<Scalars['Boolean']['output']>;
  changeArticleApproval?: Maybe<Scalars['Boolean']['output']>;
  changeOrganisationApproval?: Maybe<Scalars['Boolean']['output']>;
  changePassword?: Maybe<Scalars['Boolean']['output']>;
  changePluginActivation?: Maybe<Scalars['Boolean']['output']>;
  checkPassword?: Maybe<Scalars['Float']['output']>;
  createToken?: Maybe<TokenDto>;
  deleteAddress?: Maybe<Scalars['Boolean']['output']>;
  deleteAddresses?: Maybe<Scalars['Boolean']['output']>;
  deleteAdminFooterItem?: Maybe<Scalars['Boolean']['output']>;
  deleteAdminFooterItems?: Maybe<Scalars['Boolean']['output']>;
  deleteAdminFooterParent?: Maybe<Scalars['Boolean']['output']>;
  deleteAdminFooterParents?: Maybe<Scalars['Boolean']['output']>;
  deleteApp?: Maybe<Scalars['Boolean']['output']>;
  deleteApps?: Maybe<Scalars['Boolean']['output']>;
  deleteArticle?: Maybe<Scalars['Boolean']['output']>;
  deleteArticleCategories?: Maybe<Scalars['Boolean']['output']>;
  deleteArticleCategory?: Maybe<Scalars['Boolean']['output']>;
  deleteArticleComment?: Maybe<Scalars['Boolean']['output']>;
  deleteArticleComments?: Maybe<Scalars['Boolean']['output']>;
  deleteArticleMedia?: Maybe<Scalars['Boolean']['output']>;
  deleteArticleMedium?: Maybe<Scalars['Boolean']['output']>;
  deleteArticlePublicAuthor?: Maybe<Scalars['Boolean']['output']>;
  deleteArticlePublicAuthors?: Maybe<Scalars['Boolean']['output']>;
  deleteArticleRating?: Maybe<Scalars['Boolean']['output']>;
  deleteArticleRatings?: Maybe<Scalars['Boolean']['output']>;
  deleteArticles?: Maybe<Scalars['Boolean']['output']>;
  deleteConfiguration?: Maybe<Scalars['Boolean']['output']>;
  deleteConfigurations?: Maybe<Scalars['Boolean']['output']>;
  deleteContact?: Maybe<Scalars['Boolean']['output']>;
  deleteContacts?: Maybe<Scalars['Boolean']['output']>;
  deleteContest?: Maybe<Scalars['Boolean']['output']>;
  deleteContestComment?: Maybe<Scalars['Boolean']['output']>;
  deleteContestComments?: Maybe<Scalars['Boolean']['output']>;
  deleteContestParticipation?: Maybe<Scalars['Boolean']['output']>;
  deleteContestParticipations?: Maybe<Scalars['Boolean']['output']>;
  deleteContestType?: Maybe<Scalars['Boolean']['output']>;
  deleteContestTypes?: Maybe<Scalars['Boolean']['output']>;
  deleteContestVote?: Maybe<Scalars['Boolean']['output']>;
  deleteContestVotes?: Maybe<Scalars['Boolean']['output']>;
  deleteContests?: Maybe<Scalars['Boolean']['output']>;
  deleteDeal?: Maybe<Scalars['Boolean']['output']>;
  deleteDealCategories?: Maybe<Scalars['Boolean']['output']>;
  deleteDealCategory?: Maybe<Scalars['Boolean']['output']>;
  deleteDealMedia?: Maybe<Scalars['Boolean']['output']>;
  deleteDealMedium?: Maybe<Scalars['Boolean']['output']>;
  deleteDeals?: Maybe<Scalars['Boolean']['output']>;
  deleteErrorMessage?: Maybe<Scalars['Boolean']['output']>;
  deleteErrorMessages?: Maybe<Scalars['Boolean']['output']>;
  deleteEvent?: Maybe<Scalars['Boolean']['output']>;
  deleteEventAttendee?: Maybe<Scalars['Boolean']['output']>;
  deleteEventAttendees?: Maybe<Scalars['Boolean']['output']>;
  deleteEventCategories?: Maybe<Scalars['Boolean']['output']>;
  deleteEventCategory?: Maybe<Scalars['Boolean']['output']>;
  deleteEventComment?: Maybe<Scalars['Boolean']['output']>;
  deleteEventComments?: Maybe<Scalars['Boolean']['output']>;
  deleteEventMedia?: Maybe<Scalars['Boolean']['output']>;
  deleteEventMedium?: Maybe<Scalars['Boolean']['output']>;
  deleteEventRating?: Maybe<Scalars['Boolean']['output']>;
  deleteEventRatings?: Maybe<Scalars['Boolean']['output']>;
  deleteEventSchedule?: Maybe<Scalars['Boolean']['output']>;
  deleteEventSchedules?: Maybe<Scalars['Boolean']['output']>;
  deleteEventTargetGroup?: Maybe<Scalars['Boolean']['output']>;
  deleteEventTargetGroups?: Maybe<Scalars['Boolean']['output']>;
  deleteEvents?: Maybe<Scalars['Boolean']['output']>;
  deleteFriend?: Maybe<Scalars['Boolean']['output']>;
  deleteFriends?: Maybe<Scalars['Boolean']['output']>;
  deleteInfoMedia?: Maybe<Scalars['Boolean']['output']>;
  deleteInfoMediaCategories?: Maybe<Scalars['Boolean']['output']>;
  deleteInfoMediaCategory?: Maybe<Scalars['Boolean']['output']>;
  deleteInfoMedium?: Maybe<Scalars['Boolean']['output']>;
  deleteLabel?: Maybe<Scalars['Boolean']['output']>;
  deleteLabels?: Maybe<Scalars['Boolean']['output']>;
  deleteLanguage?: Maybe<Scalars['Boolean']['output']>;
  deleteLanguages?: Maybe<Scalars['Boolean']['output']>;
  deleteMe?: Maybe<Scalars['Boolean']['output']>;
  deleteMenuItem?: Maybe<Scalars['Boolean']['output']>;
  deleteMenuItems?: Maybe<Scalars['Boolean']['output']>;
  deleteMessageDefinition?: Maybe<Scalars['Boolean']['output']>;
  deleteMessageDefinitions?: Maybe<Scalars['Boolean']['output']>;
  deleteMessageTemplate?: Maybe<Scalars['Boolean']['output']>;
  deleteMessageTemplates?: Maybe<Scalars['Boolean']['output']>;
  deleteMilestone?: Maybe<Scalars['Boolean']['output']>;
  deleteMilestoneElement?: Maybe<Scalars['Boolean']['output']>;
  deleteMilestoneElements?: Maybe<Scalars['Boolean']['output']>;
  deleteMilestoneMedia?: Maybe<Scalars['Boolean']['output']>;
  deleteMilestoneMedium?: Maybe<Scalars['Boolean']['output']>;
  deleteMilestones?: Maybe<Scalars['Boolean']['output']>;
  deleteNotification?: Maybe<Scalars['Boolean']['output']>;
  deleteNotifications?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisation?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisationComment?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisationComments?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisationConfiguration?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisationConfigurations?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisationMedia?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisationMedium?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisationMember?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisationMembers?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisationRating?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisationRatings?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganisations?: Maybe<Scalars['Boolean']['output']>;
  deletePage?: Maybe<Scalars['Boolean']['output']>;
  deletePageEmbedding?: Maybe<Scalars['Boolean']['output']>;
  deletePageEmbeddingType?: Maybe<Scalars['Boolean']['output']>;
  deletePageEmbeddingTypes?: Maybe<Scalars['Boolean']['output']>;
  deletePageEmbeddings?: Maybe<Scalars['Boolean']['output']>;
  deletePages?: Maybe<Scalars['Boolean']['output']>;
  deletePrivilegeApplication?: Maybe<Scalars['Boolean']['output']>;
  deletePrivilegeApplications?: Maybe<Scalars['Boolean']['output']>;
  deleteQuestionOption?: Maybe<Scalars['Boolean']['output']>;
  deleteQuestionOptions?: Maybe<Scalars['Boolean']['output']>;
  deleteQuestionType?: Maybe<Scalars['Boolean']['output']>;
  deleteQuestionTypes?: Maybe<Scalars['Boolean']['output']>;
  deleteReport?: Maybe<Scalars['Boolean']['output']>;
  deleteReportType?: Maybe<Scalars['Boolean']['output']>;
  deleteReportTypes?: Maybe<Scalars['Boolean']['output']>;
  deleteReports?: Maybe<Scalars['Boolean']['output']>;
  deleteRole?: Maybe<Scalars['Boolean']['output']>;
  deleteRolePrivilege?: Maybe<Scalars['Boolean']['output']>;
  deleteRolePrivileges?: Maybe<Scalars['Boolean']['output']>;
  deleteRoles?: Maybe<Scalars['Boolean']['output']>;
  deleteSocialMedia?: Maybe<Scalars['Boolean']['output']>;
  deleteSocialMedias?: Maybe<Scalars['Boolean']['output']>;
  deleteSubscription?: Maybe<Scalars['Boolean']['output']>;
  deleteSubscriptions?: Maybe<Scalars['Boolean']['output']>;
  deleteSuburb?: Maybe<Scalars['Boolean']['output']>;
  deleteSuburbs?: Maybe<Scalars['Boolean']['output']>;
  deleteSurvey?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveyAnswer?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveyAnswers?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveyAssignment?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveyAssignments?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveyQuestion?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveyQuestions?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveyResult?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveyResults?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveyState?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveyStates?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveys?: Maybe<Scalars['Boolean']['output']>;
  deleteTheme?: Maybe<Scalars['Boolean']['output']>;
  deleteThemes?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  deleteUserContext?: Maybe<Scalars['Boolean']['output']>;
  deleteUserContexts?: Maybe<Scalars['Boolean']['output']>;
  deleteUserDeletion?: Maybe<Scalars['Boolean']['output']>;
  deleteUserDeletionType?: Maybe<Scalars['Boolean']['output']>;
  deleteUserDeletionTypes?: Maybe<Scalars['Boolean']['output']>;
  deleteUserDeletions?: Maybe<Scalars['Boolean']['output']>;
  deleteUsers?: Maybe<Scalars['Boolean']['output']>;
  refreshToken?: Maybe<TokenDto>;
  removeFavoriteArticle?: Maybe<UserContextEntity>;
  removeFavoriteAuthor?: Maybe<UserContextEntity>;
  removeFavoriteDeal?: Maybe<UserContextEntity>;
  removeFavoriteEvent?: Maybe<UserContextEntity>;
  removeFavoriteOrganisation?: Maybe<UserContextEntity>;
  resetPassword?: Maybe<Scalars['Boolean']['output']>;
  saveAddress?: Maybe<AddressEntity>;
  saveAddresses?: Maybe<Array<Maybe<AddressEntity>>>;
  saveAdminFooterItem?: Maybe<AdminFooterItemEntity>;
  saveAdminFooterItems?: Maybe<Array<Maybe<AdminFooterItemEntity>>>;
  saveAdminFooterParent?: Maybe<AdminFooterParentEntity>;
  saveAdminFooterParents?: Maybe<Array<Maybe<AdminFooterParentEntity>>>;
  saveApp?: Maybe<AppEntity>;
  saveApps?: Maybe<Array<Maybe<AppEntity>>>;
  saveArticle?: Maybe<ArticleEntity>;
  saveArticleCategories?: Maybe<Array<Maybe<ArticleCategoryEntity>>>;
  saveArticleCategory?: Maybe<ArticleCategoryEntity>;
  saveArticleComment?: Maybe<ArticleCommentEntity>;
  saveArticleComments?: Maybe<Array<Maybe<ArticleCommentEntity>>>;
  saveArticleMedia?: Maybe<Array<Maybe<ArticleMediaEntity>>>;
  saveArticleMedium?: Maybe<ArticleMediaEntity>;
  saveArticlePublicAuthor?: Maybe<ArticlePublicAuthorEntity>;
  saveArticlePublicAuthors?: Maybe<Array<Maybe<ArticlePublicAuthorEntity>>>;
  saveArticleRating?: Maybe<ArticleRatingEntity>;
  saveArticleRatings?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  saveArticles?: Maybe<Array<Maybe<ArticleEntity>>>;
  saveConfiguration?: Maybe<ConfigurationEntity>;
  saveConfigurations?: Maybe<Array<Maybe<ConfigurationEntity>>>;
  saveContact?: Maybe<ContactEntity>;
  saveContacts?: Maybe<Array<Maybe<ContactEntity>>>;
  saveContest?: Maybe<ContestEntity>;
  saveContestComment?: Maybe<ContestCommentEntity>;
  saveContestComments?: Maybe<Array<Maybe<ContestCommentEntity>>>;
  saveContestParticipation?: Maybe<ContestParticipationEntity>;
  saveContestParticipations?: Maybe<Array<Maybe<ContestParticipationEntity>>>;
  saveContestType?: Maybe<ContestTypeEntity>;
  saveContestTypes?: Maybe<Array<Maybe<ContestTypeEntity>>>;
  saveContestVote?: Maybe<ContestVoteEntity>;
  saveContestVotes?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  saveContests?: Maybe<Array<Maybe<ContestEntity>>>;
  saveDeal?: Maybe<DealEntity>;
  saveDealCategories?: Maybe<Array<Maybe<DealCategoryEntity>>>;
  saveDealCategory?: Maybe<DealCategoryEntity>;
  saveDealMedia?: Maybe<Array<Maybe<DealMediaEntity>>>;
  saveDealMedium?: Maybe<DealMediaEntity>;
  saveDeals?: Maybe<Array<Maybe<DealEntity>>>;
  saveErrorMessage?: Maybe<ErrorMessageEntity>;
  saveErrorMessages?: Maybe<Array<Maybe<ErrorMessageEntity>>>;
  saveEvent?: Maybe<EventEntity>;
  saveEventAttendee?: Maybe<EventAttendeeEntity>;
  saveEventAttendees?: Maybe<Array<Maybe<EventAttendeeEntity>>>;
  saveEventCategories?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  saveEventCategory?: Maybe<EventCategoryEntity>;
  saveEventComment?: Maybe<EventCommentEntity>;
  saveEventComments?: Maybe<Array<Maybe<EventCommentEntity>>>;
  saveEventMedia?: Maybe<Array<Maybe<EventMediaEntity>>>;
  saveEventMedium?: Maybe<EventMediaEntity>;
  saveEventRating?: Maybe<EventRatingEntity>;
  saveEventRatings?: Maybe<Array<Maybe<EventRatingEntity>>>;
  saveEventSchedule?: Maybe<EventScheduleEntity>;
  saveEventSchedules?: Maybe<Array<Maybe<EventScheduleEntity>>>;
  saveEventTargetGroup?: Maybe<EventTargetGroupEntity>;
  saveEventTargetGroups?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  saveEvents?: Maybe<Array<Maybe<EventEntity>>>;
  saveFriend?: Maybe<FriendEntity>;
  saveFriends?: Maybe<Array<Maybe<FriendEntity>>>;
  saveGuestArticle?: Maybe<ArticleEntity>;
  saveInfoMedia?: Maybe<Array<Maybe<InfoMediaEntity>>>;
  saveInfoMediaCategories?: Maybe<Array<Maybe<InfoMediaCategoryEntity>>>;
  saveInfoMediaCategory?: Maybe<InfoMediaCategoryEntity>;
  saveInfoMedium?: Maybe<InfoMediaEntity>;
  saveLabel?: Maybe<LabelEntity>;
  saveLabels?: Maybe<Array<Maybe<LabelEntity>>>;
  saveLanguage?: Maybe<LanguageEntity>;
  saveLanguages?: Maybe<Array<Maybe<LanguageEntity>>>;
  saveMe?: Maybe<UserContextEntity>;
  saveMenuItem?: Maybe<MenuItemEntity>;
  saveMenuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  saveMessageDefinition?: Maybe<MessageDefinitionEntity>;
  saveMessageDefinitions?: Maybe<Array<Maybe<MessageDefinitionEntity>>>;
  saveMessageTemplate?: Maybe<MessageTemplateEntity>;
  saveMessageTemplates?: Maybe<Array<Maybe<MessageTemplateEntity>>>;
  saveMilestone?: Maybe<MilestoneEntity>;
  saveMilestoneElement?: Maybe<MilestoneElementEntity>;
  saveMilestoneElements?: Maybe<Array<Maybe<MilestoneElementEntity>>>;
  saveMilestoneMedia?: Maybe<Array<Maybe<MilestoneMediaEntity>>>;
  saveMilestoneMedium?: Maybe<MilestoneMediaEntity>;
  saveMilestones?: Maybe<Array<Maybe<MilestoneEntity>>>;
  saveNotification?: Maybe<NotificationEntity>;
  saveNotifications?: Maybe<Array<Maybe<NotificationEntity>>>;
  saveOrganisation?: Maybe<OrganisationEntity>;
  saveOrganisationComment?: Maybe<OrganisationCommentEntity>;
  saveOrganisationComments?: Maybe<Array<Maybe<OrganisationCommentEntity>>>;
  saveOrganisationConfiguration?: Maybe<OrganisationConfigurationEntity>;
  saveOrganisationConfigurations?: Maybe<Array<Maybe<OrganisationConfigurationEntity>>>;
  saveOrganisationMedia?: Maybe<Array<Maybe<OrganisationMediaEntity>>>;
  saveOrganisationMedium?: Maybe<OrganisationMediaEntity>;
  saveOrganisationMember?: Maybe<OrganisationMemberEntity>;
  saveOrganisationMembers?: Maybe<Array<Maybe<OrganisationMemberEntity>>>;
  saveOrganisationRating?: Maybe<OrganisationRatingEntity>;
  saveOrganisationRatings?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  saveOrganisations?: Maybe<Array<Maybe<OrganisationEntity>>>;
  savePage?: Maybe<PageEntity>;
  savePageEmbedding?: Maybe<PageEmbeddingEntity>;
  savePageEmbeddingType?: Maybe<PageEmbeddingTypeEntity>;
  savePageEmbeddingTypes?: Maybe<Array<Maybe<PageEmbeddingTypeEntity>>>;
  savePageEmbeddings?: Maybe<Array<Maybe<PageEmbeddingEntity>>>;
  savePages?: Maybe<Array<Maybe<PageEntity>>>;
  savePlugin?: Maybe<PluginEntity>;
  savePlugins?: Maybe<Array<Maybe<PluginEntity>>>;
  savePrivilegeApplication?: Maybe<PrivilegeApplicationEntity>;
  savePrivilegeApplications?: Maybe<Array<Maybe<PrivilegeApplicationEntity>>>;
  saveQuestionOption?: Maybe<SurveyQuestionOptionEntity>;
  saveQuestionOptions?: Maybe<Array<Maybe<SurveyQuestionOptionEntity>>>;
  saveQuestionType?: Maybe<SurveyQuestionTypeEntity>;
  saveQuestionTypes?: Maybe<Array<Maybe<SurveyQuestionTypeEntity>>>;
  saveReport?: Maybe<ReportEntity>;
  saveReportType?: Maybe<ReportTypeEntity>;
  saveReportTypes?: Maybe<Array<Maybe<ReportTypeEntity>>>;
  saveReports?: Maybe<Array<Maybe<ReportEntity>>>;
  saveRole?: Maybe<RoleEntity>;
  saveRolePrivilege?: Maybe<RolePrivilegeEntity>;
  saveRolePrivileges?: Maybe<Array<Maybe<RolePrivilegeEntity>>>;
  saveRoles?: Maybe<Array<Maybe<RoleEntity>>>;
  saveSocialMedia?: Maybe<SocialMediaEntity>;
  saveSocialMedias?: Maybe<Array<Maybe<SocialMediaEntity>>>;
  saveSubscription?: Maybe<SubscriptionEntity>;
  saveSubscriptions?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  saveSuburb?: Maybe<SuburbEntity>;
  saveSuburbs?: Maybe<Array<Maybe<SuburbEntity>>>;
  saveSurvey?: Maybe<SurveyEntity>;
  saveSurveyAnswer?: Maybe<SurveyAnswerEntity>;
  saveSurveyAnswers?: Maybe<Array<Maybe<SurveyAnswerEntity>>>;
  saveSurveyAssignment?: Maybe<SurveyAssignmentEntity>;
  saveSurveyAssignments?: Maybe<Array<Maybe<SurveyAssignmentEntity>>>;
  saveSurveyQuestion?: Maybe<SurveyQuestionEntity>;
  saveSurveyQuestions?: Maybe<Array<Maybe<SurveyQuestionEntity>>>;
  saveSurveyResult?: Maybe<SurveyResultEntity>;
  saveSurveyResults?: Maybe<Array<Maybe<SurveyResultEntity>>>;
  saveSurveyState?: Maybe<SurveyStateEntity>;
  saveSurveyStates?: Maybe<Array<Maybe<SurveyStateEntity>>>;
  saveSurveys?: Maybe<Array<Maybe<SurveyEntity>>>;
  saveTheme?: Maybe<ThemeEntity>;
  saveThemes?: Maybe<Array<Maybe<ThemeEntity>>>;
  saveUser?: Maybe<UserEntity>;
  saveUserContext?: Maybe<UserContextEntity>;
  saveUserContexts?: Maybe<Array<Maybe<UserContextEntity>>>;
  saveUserDeletion?: Maybe<UserDeletionEntity>;
  saveUserDeletionType?: Maybe<UserDeletionTypeEntity>;
  saveUserDeletionTypes?: Maybe<Array<Maybe<UserDeletionTypeEntity>>>;
  saveUserDeletions?: Maybe<Array<Maybe<UserDeletionEntity>>>;
  saveUsers?: Maybe<Array<Maybe<UserEntity>>>;
  sendError?: Maybe<Scalars['Boolean']['output']>;
  sendPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  sendVerification?: Maybe<Scalars['Boolean']['output']>;
  sponsorArticle?: Maybe<Scalars['Boolean']['output']>;
  sponsorContest?: Maybe<Scalars['Boolean']['output']>;
  sponsorDeal?: Maybe<Scalars['Boolean']['output']>;
  sponsorEvent?: Maybe<Scalars['Boolean']['output']>;
  sponsorOrganisation?: Maybe<Scalars['Boolean']['output']>;
  sponsorSurvey?: Maybe<Scalars['Boolean']['output']>;
  verify?: Maybe<UserEntity>;
  verifyAddress?: Maybe<AddressEntity>;
};


/** Mutation root */
export type MutationAddFavoriteArticleArgs = {
  articleId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationAddFavoriteAuthorArgs = {
  userContextId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationAddFavoriteDealArgs = {
  dealId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationAddFavoriteEventArgs = {
  eventId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationAddFavoriteOrganisationArgs = {
  organisationId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationAddUserArgs = {
  roleId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationAssignLandingPageArgs = {
  pageId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationChangeArticleApprovalArgs = {
  articleId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationChangeOrganisationApprovalArgs = {
  organisationId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationChangePasswordArgs = {
  newPassword?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationChangePluginActivationArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  pluginId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationCheckPasswordArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationCreateTokenArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteAddressArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteAddressesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteAdminFooterItemArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteAdminFooterItemsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteAdminFooterParentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteAdminFooterParentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteAppArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteAppsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteArticleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteArticleCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteArticleCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteArticleCommentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteArticleCommentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteArticleMediaArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteArticleMediumArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteArticlePublicAuthorArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteArticlePublicAuthorsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteArticleRatingArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteArticleRatingsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteArticlesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteConfigurationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteConfigurationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteContactArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteContactsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteContestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteContestCommentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteContestCommentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteContestParticipationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteContestParticipationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteContestTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteContestTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteContestVoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteContestVotesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteContestsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteDealArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteDealCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteDealCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteDealMediaArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteDealMediumArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteDealsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteErrorMessageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteErrorMessagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteEventArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteEventAttendeeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteEventAttendeesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteEventCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteEventCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteEventCommentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteEventCommentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteEventMediaArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteEventMediumArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteEventRatingArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteEventRatingsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteEventScheduleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteEventSchedulesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteEventTargetGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteEventTargetGroupsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteEventsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteFriendArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteFriendsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteInfoMediaArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteInfoMediaCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteInfoMediaCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteInfoMediumArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteLabelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteLabelsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteLanguageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteLanguagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteMeArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  userDeletion?: InputMaybe<UserDeletionEntityInput>;
};


/** Mutation root */
export type MutationDeleteMenuItemArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteMenuItemsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteMessageDefinitionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteMessageDefinitionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteMessageTemplateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteMessageTemplatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteMilestoneArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteMilestoneElementArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteMilestoneElementsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteMilestoneMediaArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteMilestoneMediumArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteMilestonesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteNotificationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteNotificationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteOrganisationCommentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteOrganisationCommentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationConfigurationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteOrganisationConfigurationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationMediaArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationMediumArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteOrganisationMemberArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteOrganisationMembersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationRatingArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteOrganisationRatingsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeletePageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeletePageEmbeddingArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeletePageEmbeddingTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeletePageEmbeddingTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeletePageEmbeddingsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeletePagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeletePrivilegeApplicationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeletePrivilegeApplicationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteQuestionOptionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteQuestionOptionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteQuestionTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteQuestionTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteReportArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteReportTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteReportTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteReportsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteRoleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteRolePrivilegeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteRolePrivilegesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteRolesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteSocialMediaArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteSocialMediasArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteSubscriptionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteSubscriptionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteSuburbArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteSuburbsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteSurveyArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteSurveyAnswerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteSurveyAnswersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteSurveyAssignmentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteSurveyAssignmentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteSurveyQuestionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteSurveyQuestionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteSurveyResultArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteSurveyResultsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteSurveyStateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteSurveyStatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteSurveysArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteThemeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteThemesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteUserContextArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteUserContextsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteUserDeletionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteUserDeletionTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteUserDeletionTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteUserDeletionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationRemoveFavoriteArticleArgs = {
  articleId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationRemoveFavoriteAuthorArgs = {
  userContextId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationRemoveFavoriteDealArgs = {
  dealId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationRemoveFavoriteEventArgs = {
  eventId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationRemoveFavoriteOrganisationArgs = {
  organisationId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationResetPasswordArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationSaveAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
};


/** Mutation root */
export type MutationSaveAddressesArgs = {
  entities?: InputMaybe<Array<InputMaybe<AddressEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAdminFooterItemArgs = {
  entity?: InputMaybe<AdminFooterItemEntityInput>;
};


/** Mutation root */
export type MutationSaveAdminFooterItemsArgs = {
  entities?: InputMaybe<Array<InputMaybe<AdminFooterItemEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAdminFooterParentArgs = {
  entity?: InputMaybe<AdminFooterParentEntityInput>;
};


/** Mutation root */
export type MutationSaveAdminFooterParentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<AdminFooterParentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAppArgs = {
  entity?: InputMaybe<AppEntityInput>;
};


/** Mutation root */
export type MutationSaveAppsArgs = {
  entities?: InputMaybe<Array<InputMaybe<AppEntityInput>>>;
};


/** Mutation root */
export type MutationSaveArticleArgs = {
  entity?: InputMaybe<ArticleEntityInput>;
};


/** Mutation root */
export type MutationSaveArticleCategoriesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticleCategoryEntityInput>>>;
};


/** Mutation root */
export type MutationSaveArticleCategoryArgs = {
  entity?: InputMaybe<ArticleCategoryEntityInput>;
};


/** Mutation root */
export type MutationSaveArticleCommentArgs = {
  entity?: InputMaybe<ArticleCommentEntityInput>;
};


/** Mutation root */
export type MutationSaveArticleCommentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticleCommentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveArticleMediaArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticleMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveArticleMediumArgs = {
  entity?: InputMaybe<ArticleMediaEntityInput>;
};


/** Mutation root */
export type MutationSaveArticlePublicAuthorArgs = {
  entity?: InputMaybe<ArticlePublicAuthorEntityInput>;
};


/** Mutation root */
export type MutationSaveArticlePublicAuthorsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticlePublicAuthorEntityInput>>>;
};


/** Mutation root */
export type MutationSaveArticleRatingArgs = {
  entity?: InputMaybe<ArticleRatingEntityInput>;
};


/** Mutation root */
export type MutationSaveArticleRatingsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticleRatingEntityInput>>>;
};


/** Mutation root */
export type MutationSaveArticlesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
};


/** Mutation root */
export type MutationSaveConfigurationArgs = {
  entity?: InputMaybe<ConfigurationEntityInput>;
};


/** Mutation root */
export type MutationSaveConfigurationsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ConfigurationEntityInput>>>;
};


/** Mutation root */
export type MutationSaveContactArgs = {
  entity?: InputMaybe<ContactEntityInput>;
};


/** Mutation root */
export type MutationSaveContactsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContactEntityInput>>>;
};


/** Mutation root */
export type MutationSaveContestArgs = {
  entity?: InputMaybe<ContestEntityInput>;
};


/** Mutation root */
export type MutationSaveContestCommentArgs = {
  entity?: InputMaybe<ContestCommentEntityInput>;
};


/** Mutation root */
export type MutationSaveContestCommentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContestCommentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveContestParticipationArgs = {
  entity?: InputMaybe<ContestParticipationEntityInput>;
};


/** Mutation root */
export type MutationSaveContestParticipationsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContestParticipationEntityInput>>>;
};


/** Mutation root */
export type MutationSaveContestTypeArgs = {
  entity?: InputMaybe<ContestTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveContestTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContestTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveContestVoteArgs = {
  entity?: InputMaybe<ContestVoteEntityInput>;
};


/** Mutation root */
export type MutationSaveContestVotesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContestVoteEntityInput>>>;
};


/** Mutation root */
export type MutationSaveContestsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContestEntityInput>>>;
};


/** Mutation root */
export type MutationSaveDealArgs = {
  entity?: InputMaybe<DealEntityInput>;
};


/** Mutation root */
export type MutationSaveDealCategoriesArgs = {
  entities?: InputMaybe<Array<InputMaybe<DealCategoryEntityInput>>>;
};


/** Mutation root */
export type MutationSaveDealCategoryArgs = {
  entity?: InputMaybe<DealCategoryEntityInput>;
};


/** Mutation root */
export type MutationSaveDealMediaArgs = {
  entities?: InputMaybe<Array<InputMaybe<DealMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveDealMediumArgs = {
  entity?: InputMaybe<DealMediaEntityInput>;
};


/** Mutation root */
export type MutationSaveDealsArgs = {
  entities?: InputMaybe<Array<InputMaybe<DealEntityInput>>>;
};


/** Mutation root */
export type MutationSaveErrorMessageArgs = {
  entity?: InputMaybe<ErrorMessageEntityInput>;
};


/** Mutation root */
export type MutationSaveErrorMessagesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ErrorMessageEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventArgs = {
  entity?: InputMaybe<EventEntityInput>;
};


/** Mutation root */
export type MutationSaveEventAttendeeArgs = {
  entity?: InputMaybe<EventAttendeeEntityInput>;
};


/** Mutation root */
export type MutationSaveEventAttendeesArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventAttendeeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventCategoriesArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventCategoryEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventCategoryArgs = {
  entity?: InputMaybe<EventCategoryEntityInput>;
};


/** Mutation root */
export type MutationSaveEventCommentArgs = {
  entity?: InputMaybe<EventCommentEntityInput>;
};


/** Mutation root */
export type MutationSaveEventCommentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventCommentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventMediaArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventMediumArgs = {
  entity?: InputMaybe<EventMediaEntityInput>;
};


/** Mutation root */
export type MutationSaveEventRatingArgs = {
  entity?: InputMaybe<EventRatingEntityInput>;
};


/** Mutation root */
export type MutationSaveEventRatingsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventRatingEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventScheduleArgs = {
  entity?: InputMaybe<EventScheduleEntityInput>;
};


/** Mutation root */
export type MutationSaveEventSchedulesArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventScheduleEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventTargetGroupArgs = {
  entity?: InputMaybe<EventTargetGroupEntityInput>;
};


/** Mutation root */
export type MutationSaveEventTargetGroupsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventTargetGroupEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
};


/** Mutation root */
export type MutationSaveFriendArgs = {
  entity?: InputMaybe<FriendEntityInput>;
};


/** Mutation root */
export type MutationSaveFriendsArgs = {
  entities?: InputMaybe<Array<InputMaybe<FriendEntityInput>>>;
};


/** Mutation root */
export type MutationSaveGuestArticleArgs = {
  entity?: InputMaybe<ArticleEntityInput>;
};


/** Mutation root */
export type MutationSaveInfoMediaArgs = {
  entities?: InputMaybe<Array<InputMaybe<InfoMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveInfoMediaCategoriesArgs = {
  entities?: InputMaybe<Array<InputMaybe<InfoMediaCategoryEntityInput>>>;
};


/** Mutation root */
export type MutationSaveInfoMediaCategoryArgs = {
  entity?: InputMaybe<InfoMediaCategoryEntityInput>;
};


/** Mutation root */
export type MutationSaveInfoMediumArgs = {
  entity?: InputMaybe<InfoMediaEntityInput>;
};


/** Mutation root */
export type MutationSaveLabelArgs = {
  entity?: InputMaybe<LabelEntityInput>;
};


/** Mutation root */
export type MutationSaveLabelsArgs = {
  entities?: InputMaybe<Array<InputMaybe<LabelEntityInput>>>;
};


/** Mutation root */
export type MutationSaveLanguageArgs = {
  entity?: InputMaybe<LanguageEntityInput>;
};


/** Mutation root */
export type MutationSaveLanguagesArgs = {
  entities?: InputMaybe<Array<InputMaybe<LanguageEntityInput>>>;
};


/** Mutation root */
export type MutationSaveMeArgs = {
  entity?: InputMaybe<UserContextEntityInput>;
};


/** Mutation root */
export type MutationSaveMenuItemArgs = {
  entity?: InputMaybe<MenuItemEntityInput>;
};


/** Mutation root */
export type MutationSaveMenuItemsArgs = {
  entities?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
};


/** Mutation root */
export type MutationSaveMessageDefinitionArgs = {
  entity?: InputMaybe<MessageDefinitionEntityInput>;
};


/** Mutation root */
export type MutationSaveMessageDefinitionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<MessageDefinitionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveMessageTemplateArgs = {
  entity?: InputMaybe<MessageTemplateEntityInput>;
};


/** Mutation root */
export type MutationSaveMessageTemplatesArgs = {
  entities?: InputMaybe<Array<InputMaybe<MessageTemplateEntityInput>>>;
};


/** Mutation root */
export type MutationSaveMilestoneArgs = {
  entity?: InputMaybe<MilestoneEntityInput>;
};


/** Mutation root */
export type MutationSaveMilestoneElementArgs = {
  entity?: InputMaybe<MilestoneElementEntityInput>;
};


/** Mutation root */
export type MutationSaveMilestoneElementsArgs = {
  entities?: InputMaybe<Array<InputMaybe<MilestoneElementEntityInput>>>;
};


/** Mutation root */
export type MutationSaveMilestoneMediaArgs = {
  entities?: InputMaybe<Array<InputMaybe<MilestoneMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveMilestoneMediumArgs = {
  entity?: InputMaybe<MilestoneMediaEntityInput>;
};


/** Mutation root */
export type MutationSaveMilestonesArgs = {
  entities?: InputMaybe<Array<InputMaybe<MilestoneEntityInput>>>;
};


/** Mutation root */
export type MutationSaveNotificationArgs = {
  entity?: InputMaybe<NotificationEntityInput>;
};


/** Mutation root */
export type MutationSaveNotificationsArgs = {
  entities?: InputMaybe<Array<InputMaybe<NotificationEntityInput>>>;
};


/** Mutation root */
export type MutationSaveOrganisationArgs = {
  entity?: InputMaybe<OrganisationEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganisationCommentArgs = {
  entity?: InputMaybe<OrganisationCommentEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganisationCommentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganisationCommentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveOrganisationConfigurationArgs = {
  entity?: InputMaybe<OrganisationConfigurationEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganisationConfigurationsArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganisationConfigurationEntityInput>>>;
};


/** Mutation root */
export type MutationSaveOrganisationMediaArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganisationMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveOrganisationMediumArgs = {
  entity?: InputMaybe<OrganisationMediaEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganisationMemberArgs = {
  entity?: InputMaybe<OrganisationMemberEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganisationMembersArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganisationMemberEntityInput>>>;
};


/** Mutation root */
export type MutationSaveOrganisationRatingArgs = {
  entity?: InputMaybe<OrganisationRatingEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganisationRatingsArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganisationRatingEntityInput>>>;
};


/** Mutation root */
export type MutationSaveOrganisationsArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganisationEntityInput>>>;
};


/** Mutation root */
export type MutationSavePageArgs = {
  entity?: InputMaybe<PageEntityInput>;
};


/** Mutation root */
export type MutationSavePageEmbeddingArgs = {
  entity?: InputMaybe<PageEmbeddingEntityInput>;
};


/** Mutation root */
export type MutationSavePageEmbeddingTypeArgs = {
  entity?: InputMaybe<PageEmbeddingTypeEntityInput>;
};


/** Mutation root */
export type MutationSavePageEmbeddingTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<PageEmbeddingTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSavePageEmbeddingsArgs = {
  entities?: InputMaybe<Array<InputMaybe<PageEmbeddingEntityInput>>>;
};


/** Mutation root */
export type MutationSavePagesArgs = {
  entities?: InputMaybe<Array<InputMaybe<PageEntityInput>>>;
};


/** Mutation root */
export type MutationSavePluginArgs = {
  entity?: InputMaybe<PluginEntityInput>;
};


/** Mutation root */
export type MutationSavePluginsArgs = {
  entities?: InputMaybe<Array<InputMaybe<PluginEntityInput>>>;
};


/** Mutation root */
export type MutationSavePrivilegeApplicationArgs = {
  entity?: InputMaybe<PrivilegeApplicationEntityInput>;
};


/** Mutation root */
export type MutationSavePrivilegeApplicationsArgs = {
  entities?: InputMaybe<Array<InputMaybe<PrivilegeApplicationEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionOptionArgs = {
  entity?: InputMaybe<SurveyQuestionOptionEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionOptionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyQuestionOptionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionTypeArgs = {
  entity?: InputMaybe<SurveyQuestionTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyQuestionTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveReportArgs = {
  entity?: InputMaybe<ReportEntityInput>;
};


/** Mutation root */
export type MutationSaveReportTypeArgs = {
  entity?: InputMaybe<ReportTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveReportTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ReportTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveReportsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ReportEntityInput>>>;
};


/** Mutation root */
export type MutationSaveRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};


/** Mutation root */
export type MutationSaveRolePrivilegeArgs = {
  entity?: InputMaybe<RolePrivilegeEntityInput>;
};


/** Mutation root */
export type MutationSaveRolePrivilegesArgs = {
  entities?: InputMaybe<Array<InputMaybe<RolePrivilegeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveRolesArgs = {
  entities?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSocialMediaArgs = {
  entity?: InputMaybe<SocialMediaEntityInput>;
};


/** Mutation root */
export type MutationSaveSocialMediasArgs = {
  entities?: InputMaybe<Array<InputMaybe<SocialMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSubscriptionArgs = {
  entity?: InputMaybe<SubscriptionEntityInput>;
};


/** Mutation root */
export type MutationSaveSubscriptionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SubscriptionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSuburbArgs = {
  entity?: InputMaybe<SuburbEntityInput>;
};


/** Mutation root */
export type MutationSaveSuburbsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SuburbEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSurveyArgs = {
  entity?: InputMaybe<SurveyEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyAnswerArgs = {
  entity?: InputMaybe<SurveyAnswerEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyAnswersArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyAnswerEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSurveyAssignmentArgs = {
  entity?: InputMaybe<SurveyAssignmentEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyAssignmentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyAssignmentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSurveyQuestionArgs = {
  entity?: InputMaybe<SurveyQuestionEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyQuestionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyQuestionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSurveyResultArgs = {
  entity?: InputMaybe<SurveyResultEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyResultsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyResultEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSurveyStateArgs = {
  entity?: InputMaybe<SurveyStateEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyStatesArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyStateEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSurveysArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyEntityInput>>>;
};


/** Mutation root */
export type MutationSaveThemeArgs = {
  entity?: InputMaybe<ThemeEntityInput>;
};


/** Mutation root */
export type MutationSaveThemesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ThemeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveUserArgs = {
  entity?: InputMaybe<UserEntityInput>;
};


/** Mutation root */
export type MutationSaveUserContextArgs = {
  entity?: InputMaybe<UserContextEntityInput>;
};


/** Mutation root */
export type MutationSaveUserContextsArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
};


/** Mutation root */
export type MutationSaveUserDeletionArgs = {
  entity?: InputMaybe<UserDeletionEntityInput>;
};


/** Mutation root */
export type MutationSaveUserDeletionTypeArgs = {
  entity?: InputMaybe<UserDeletionTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveUserDeletionTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserDeletionTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveUserDeletionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserDeletionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveUsersArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};


/** Mutation root */
export type MutationSendErrorArgs = {
  stackTrace?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationSendPasswordResetArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationSendVerificationArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationSponsorArticleArgs = {
  articleId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationSponsorContestArgs = {
  contestId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationSponsorDealArgs = {
  dealId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationSponsorEventArgs = {
  eventId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationSponsorOrganisationArgs = {
  organisationId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationSponsorSurveyArgs = {
  surveyId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationVerifyArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationVerifyAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
};

export type NotificationEntity = {
  __typename?: 'NotificationEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  translatables?: Maybe<Array<Maybe<NotificationTranslatableEntity>>>;
  user?: Maybe<UserEntity>;
};

export type NotificationEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<NotificationTranslatableEntityInput>>>;
  user?: InputMaybe<UserEntityInput>;
};

export type NotificationTranslatableEntity = {
  __typename?: 'NotificationTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<NotificationEntity>;
  title?: Maybe<Scalars['String']['output']>;
};

export type NotificationTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  parent?: InputMaybe<NotificationEntityInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type OrganisationCommentEntity = {
  __typename?: 'OrganisationCommentEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  organisation?: Maybe<OrganisationEntity>;
  translatables?: Maybe<Array<Maybe<OrganisationCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type OrganisationCommentEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<OrganisationCommentTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type OrganisationCommentTranslatableEntity = {
  __typename?: 'OrganisationCommentTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type OrganisationCommentTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type OrganisationConfigurationEntity = {
  __typename?: 'OrganisationConfigurationEntity';
  approvalRequired?: Maybe<Scalars['Boolean']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  memberRole?: Maybe<RoleEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type OrganisationConfigurationEntityInput = {
  approvalRequired?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  memberRole?: InputMaybe<RoleEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type OrganisationEntity = {
  __typename?: 'OrganisationEntity';
  address?: Maybe<AddressEntity>;
  approved?: Maybe<Scalars['Boolean']['output']>;
  comments?: Maybe<Array<Maybe<OrganisationCommentEntity>>>;
  commentsAllowed?: Maybe<Scalars['Boolean']['output']>;
  contact?: Maybe<ContactEntity>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  favoritingUsers?: Maybe<Array<Maybe<UserContextEntity>>>;
  id?: Maybe<Scalars['String']['output']>;
  lastOrganisationComment?: Maybe<OrganisationCommentEntity>;
  members?: Maybe<Array<Maybe<OrganisationMemberEntity>>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ratingDistribution?: Maybe<AnalyticsDto>;
  ratingStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  ratings?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  searchStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  slug?: Maybe<Scalars['String']['output']>;
  sponsored?: Maybe<Scalars['Boolean']['output']>;
  translatables?: Maybe<Array<Maybe<OrganisationTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<OrganisationMediaEntity>>>;
  visitorStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  visitors?: Maybe<Array<Maybe<OrganisationVisitorEntity>>>;
};


export type OrganisationEntityRatingDistributionArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type OrganisationEntityRatingStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type OrganisationEntitySearchStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type OrganisationEntityVisitorStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type OrganisationEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  comments?: InputMaybe<Array<InputMaybe<OrganisationCommentEntityInput>>>;
  commentsAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  contact?: InputMaybe<ContactEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoritingUsers?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<Array<InputMaybe<OrganisationMemberEntityInput>>>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ratings?: InputMaybe<Array<InputMaybe<OrganisationRatingEntityInput>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sponsored?: InputMaybe<Scalars['Boolean']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<OrganisationTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<OrganisationMediaEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<OrganisationVisitorEntityInput>>>;
};

export type OrganisationMediaEntity = {
  __typename?: 'OrganisationMediaEntity';
  card?: Maybe<Scalars['Boolean']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  organisation?: Maybe<OrganisationEntity>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type OrganisationMediaEntityInput = {
  card?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrganisationMemberEntity = {
  __typename?: 'OrganisationMemberEntity';
  approved?: Maybe<Scalars['Boolean']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  organisation?: Maybe<OrganisationEntity>;
  userContext?: Maybe<UserContextEntity>;
};

export type OrganisationMemberEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type OrganisationRatingEntity = {
  __typename?: 'OrganisationRatingEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<OrganisationEntity>;
  score?: Maybe<Scalars['Int']['output']>;
  userContext?: Maybe<UserContextEntity>;
};

export type OrganisationRatingEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  parent?: InputMaybe<OrganisationEntityInput>;
  score?: InputMaybe<Scalars['Int']['input']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type OrganisationTranslatableEntity = {
  __typename?: 'OrganisationTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type OrganisationTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type OrganisationVisitorEntity = {
  __typename?: 'OrganisationVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<OrganisationEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']['output']>;
};

export type OrganisationVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  visits?: InputMaybe<Scalars['Int']['input']>;
};

export type PageAttributeEntity = {
  __typename?: 'PageAttributeEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  embedding?: Maybe<PageEmbeddingEntity>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  references?: Maybe<Array<Maybe<PageAttributeReferenceEntity>>>;
  translatable?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<PageAttributeTranslatableEntity>>>;
  type?: Maybe<PageAttributeTypeEntity>;
  value?: Maybe<Scalars['String']['output']>;
};

export type PageAttributeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  embedding?: InputMaybe<PageEmbeddingEntityInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  references?: InputMaybe<Array<InputMaybe<PageAttributeReferenceEntityInput>>>;
  translatable?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<PageAttributeTranslatableEntityInput>>>;
  type?: InputMaybe<PageAttributeTypeEntityInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PageAttributeReferenceEntity = {
  __typename?: 'PageAttributeReferenceEntity';
  attribute?: Maybe<PageAttributeEntity>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  plugin?: Maybe<PluginEntity>;
};

export type PageAttributeReferenceEntityInput = {
  attribute?: InputMaybe<PageAttributeEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  plugin?: InputMaybe<PluginEntityInput>;
};

export type PageAttributeTranslatableEntity = {
  __typename?: 'PageAttributeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  translatable?: Maybe<Scalars['String']['output']>;
};

export type PageAttributeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  translatable?: InputMaybe<Scalars['String']['input']>;
};

export type PageAttributeTypeEntity = {
  __typename?: 'PageAttributeTypeEntity';
  attributes?: Maybe<Array<Maybe<PageAttributeEntity>>>;
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  embeddingTypes?: Maybe<Array<Maybe<PageEmbeddingTypeEntity>>>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type PageAttributeTypeEntityInput = {
  attributes?: InputMaybe<Array<InputMaybe<PageAttributeEntityInput>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  embeddingTypes?: InputMaybe<Array<InputMaybe<PageEmbeddingTypeEntityInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type PageEmbeddingEntity = {
  __typename?: 'PageEmbeddingEntity';
  attributes?: Maybe<Array<Maybe<PageAttributeEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<PageEntity>;
  type?: Maybe<PageEmbeddingTypeEntity>;
};

export type PageEmbeddingEntityInput = {
  attributes?: InputMaybe<Array<InputMaybe<PageAttributeEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<PageEntityInput>;
  type?: InputMaybe<PageEmbeddingTypeEntityInput>;
};

export type PageEmbeddingTypeEntity = {
  __typename?: 'PageEmbeddingTypeEntity';
  attributes?: Maybe<Array<Maybe<PageAttributeTypeEntity>>>;
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  embeddings?: Maybe<Array<Maybe<PageEmbeddingEntity>>>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<PageEmbeddingTypeTranslatableEntity>>>;
};

export type PageEmbeddingTypeEntityInput = {
  attributes?: InputMaybe<Array<InputMaybe<PageAttributeTypeEntityInput>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  embeddings?: InputMaybe<Array<InputMaybe<PageEmbeddingEntityInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<PageEmbeddingTypeTranslatableEntityInput>>>;
};

export type PageEmbeddingTypeTranslatableEntity = {
  __typename?: 'PageEmbeddingTypeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PageEmbeddingTypeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  embeddings?: Maybe<Array<Maybe<PageEmbeddingEntity>>>;
  id?: Maybe<Scalars['String']['output']>;
  isLanding?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  menuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  searchStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  visitorStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  visitors?: Maybe<Array<Maybe<PageVisitorEntity>>>;
};


export type PageEntitySearchStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type PageEntityVisitorStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type PageEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  embeddings?: InputMaybe<Array<InputMaybe<PageEmbeddingEntityInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  isLanding?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  menuItems?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  visitors?: InputMaybe<Array<InputMaybe<PageVisitorEntityInput>>>;
};

export type PageVisitorEntity = {
  __typename?: 'PageVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<PageEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']['output']>;
};

export type PageVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  visits?: InputMaybe<Scalars['Int']['input']>;
};

export type PageableList_AddressEntity = {
  __typename?: 'PageableList_AddressEntity';
  result?: Maybe<Array<Maybe<AddressEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_AdminFooterItemEntity = {
  __typename?: 'PageableList_AdminFooterItemEntity';
  result?: Maybe<Array<Maybe<AdminFooterItemEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_AdminFooterParentEntity = {
  __typename?: 'PageableList_AdminFooterParentEntity';
  result?: Maybe<Array<Maybe<AdminFooterParentEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_AppEntity = {
  __typename?: 'PageableList_AppEntity';
  result?: Maybe<Array<Maybe<AppEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ArticleCategoryEntity = {
  __typename?: 'PageableList_ArticleCategoryEntity';
  result?: Maybe<Array<Maybe<ArticleCategoryEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ArticleCommentEntity = {
  __typename?: 'PageableList_ArticleCommentEntity';
  result?: Maybe<Array<Maybe<ArticleCommentEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ArticleEntity = {
  __typename?: 'PageableList_ArticleEntity';
  result?: Maybe<Array<Maybe<ArticleEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ArticleMediaEntity = {
  __typename?: 'PageableList_ArticleMediaEntity';
  result?: Maybe<Array<Maybe<ArticleMediaEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ArticlePublicAuthorEntity = {
  __typename?: 'PageableList_ArticlePublicAuthorEntity';
  result?: Maybe<Array<Maybe<ArticlePublicAuthorEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ArticleRatingEntity = {
  __typename?: 'PageableList_ArticleRatingEntity';
  result?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ConfigurationEntity = {
  __typename?: 'PageableList_ConfigurationEntity';
  result?: Maybe<Array<Maybe<ConfigurationEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ContactEntity = {
  __typename?: 'PageableList_ContactEntity';
  result?: Maybe<Array<Maybe<ContactEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ContestCommentEntity = {
  __typename?: 'PageableList_ContestCommentEntity';
  result?: Maybe<Array<Maybe<ContestCommentEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ContestEntity = {
  __typename?: 'PageableList_ContestEntity';
  result?: Maybe<Array<Maybe<ContestEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ContestParticipationEntity = {
  __typename?: 'PageableList_ContestParticipationEntity';
  result?: Maybe<Array<Maybe<ContestParticipationEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ContestTypeEntity = {
  __typename?: 'PageableList_ContestTypeEntity';
  result?: Maybe<Array<Maybe<ContestTypeEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ContestVoteEntity = {
  __typename?: 'PageableList_ContestVoteEntity';
  result?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_DealCategoryEntity = {
  __typename?: 'PageableList_DealCategoryEntity';
  result?: Maybe<Array<Maybe<DealCategoryEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_DealEntity = {
  __typename?: 'PageableList_DealEntity';
  result?: Maybe<Array<Maybe<DealEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_DealMediaEntity = {
  __typename?: 'PageableList_DealMediaEntity';
  result?: Maybe<Array<Maybe<DealMediaEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ErrorMessageEntity = {
  __typename?: 'PageableList_ErrorMessageEntity';
  result?: Maybe<Array<Maybe<ErrorMessageEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_EventAttendeeEntity = {
  __typename?: 'PageableList_EventAttendeeEntity';
  result?: Maybe<Array<Maybe<EventAttendeeEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_EventCategoryEntity = {
  __typename?: 'PageableList_EventCategoryEntity';
  result?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_EventCommentEntity = {
  __typename?: 'PageableList_EventCommentEntity';
  result?: Maybe<Array<Maybe<EventCommentEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_EventEntity = {
  __typename?: 'PageableList_EventEntity';
  result?: Maybe<Array<Maybe<EventEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_EventMediaEntity = {
  __typename?: 'PageableList_EventMediaEntity';
  result?: Maybe<Array<Maybe<EventMediaEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_EventRatingEntity = {
  __typename?: 'PageableList_EventRatingEntity';
  result?: Maybe<Array<Maybe<EventRatingEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_EventScheduleEntity = {
  __typename?: 'PageableList_EventScheduleEntity';
  result?: Maybe<Array<Maybe<EventScheduleEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_EventTargetGroupEntity = {
  __typename?: 'PageableList_EventTargetGroupEntity';
  result?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_FriendEntity = {
  __typename?: 'PageableList_FriendEntity';
  result?: Maybe<Array<Maybe<FriendEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_InfoMediaCategoryEntity = {
  __typename?: 'PageableList_InfoMediaCategoryEntity';
  result?: Maybe<Array<Maybe<InfoMediaCategoryEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_InfoMediaEntity = {
  __typename?: 'PageableList_InfoMediaEntity';
  result?: Maybe<Array<Maybe<InfoMediaEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_LabelEntity = {
  __typename?: 'PageableList_LabelEntity';
  result?: Maybe<Array<Maybe<LabelEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_LanguageEntity = {
  __typename?: 'PageableList_LanguageEntity';
  result?: Maybe<Array<Maybe<LanguageEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_MenuItemEntity = {
  __typename?: 'PageableList_MenuItemEntity';
  result?: Maybe<Array<Maybe<MenuItemEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_MessageDefinitionEntity = {
  __typename?: 'PageableList_MessageDefinitionEntity';
  result?: Maybe<Array<Maybe<MessageDefinitionEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_MessageTemplateEntity = {
  __typename?: 'PageableList_MessageTemplateEntity';
  result?: Maybe<Array<Maybe<MessageTemplateEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_MilestoneElementEntity = {
  __typename?: 'PageableList_MilestoneElementEntity';
  result?: Maybe<Array<Maybe<MilestoneElementEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_MilestoneEntity = {
  __typename?: 'PageableList_MilestoneEntity';
  result?: Maybe<Array<Maybe<MilestoneEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_MilestoneMediaEntity = {
  __typename?: 'PageableList_MilestoneMediaEntity';
  result?: Maybe<Array<Maybe<MilestoneMediaEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_NotificationEntity = {
  __typename?: 'PageableList_NotificationEntity';
  result?: Maybe<Array<Maybe<NotificationEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_OrganisationCommentEntity = {
  __typename?: 'PageableList_OrganisationCommentEntity';
  result?: Maybe<Array<Maybe<OrganisationCommentEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_OrganisationConfigurationEntity = {
  __typename?: 'PageableList_OrganisationConfigurationEntity';
  result?: Maybe<Array<Maybe<OrganisationConfigurationEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_OrganisationEntity = {
  __typename?: 'PageableList_OrganisationEntity';
  result?: Maybe<Array<Maybe<OrganisationEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_OrganisationMediaEntity = {
  __typename?: 'PageableList_OrganisationMediaEntity';
  result?: Maybe<Array<Maybe<OrganisationMediaEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_OrganisationMemberEntity = {
  __typename?: 'PageableList_OrganisationMemberEntity';
  result?: Maybe<Array<Maybe<OrganisationMemberEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_OrganisationRatingEntity = {
  __typename?: 'PageableList_OrganisationRatingEntity';
  result?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_PageEmbeddingEntity = {
  __typename?: 'PageableList_PageEmbeddingEntity';
  result?: Maybe<Array<Maybe<PageEmbeddingEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_PageEmbeddingTypeEntity = {
  __typename?: 'PageableList_PageEmbeddingTypeEntity';
  result?: Maybe<Array<Maybe<PageEmbeddingTypeEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_PageEntity = {
  __typename?: 'PageableList_PageEntity';
  result?: Maybe<Array<Maybe<PageEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_PluginEntity = {
  __typename?: 'PageableList_PluginEntity';
  result?: Maybe<Array<Maybe<PluginEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_PrivilegeApplicationEntity = {
  __typename?: 'PageableList_PrivilegeApplicationEntity';
  result?: Maybe<Array<Maybe<PrivilegeApplicationEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ReportEntity = {
  __typename?: 'PageableList_ReportEntity';
  result?: Maybe<Array<Maybe<ReportEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ReportTypeEntity = {
  __typename?: 'PageableList_ReportTypeEntity';
  result?: Maybe<Array<Maybe<ReportTypeEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_RoleEntity = {
  __typename?: 'PageableList_RoleEntity';
  result?: Maybe<Array<Maybe<RoleEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_RolePrivilegeEntity = {
  __typename?: 'PageableList_RolePrivilegeEntity';
  result?: Maybe<Array<Maybe<RolePrivilegeEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_SocialMediaEntity = {
  __typename?: 'PageableList_SocialMediaEntity';
  result?: Maybe<Array<Maybe<SocialMediaEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_SubscriptionEntity = {
  __typename?: 'PageableList_SubscriptionEntity';
  result?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_SuburbEntity = {
  __typename?: 'PageableList_SuburbEntity';
  result?: Maybe<Array<Maybe<SuburbEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_SurveyAnswerEntity = {
  __typename?: 'PageableList_SurveyAnswerEntity';
  result?: Maybe<Array<Maybe<SurveyAnswerEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_SurveyAssignmentEntity = {
  __typename?: 'PageableList_SurveyAssignmentEntity';
  result?: Maybe<Array<Maybe<SurveyAssignmentEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_SurveyEntity = {
  __typename?: 'PageableList_SurveyEntity';
  result?: Maybe<Array<Maybe<SurveyEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_SurveyQuestionEntity = {
  __typename?: 'PageableList_SurveyQuestionEntity';
  result?: Maybe<Array<Maybe<SurveyQuestionEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_SurveyQuestionOptionEntity = {
  __typename?: 'PageableList_SurveyQuestionOptionEntity';
  result?: Maybe<Array<Maybe<SurveyQuestionOptionEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_SurveyQuestionTypeEntity = {
  __typename?: 'PageableList_SurveyQuestionTypeEntity';
  result?: Maybe<Array<Maybe<SurveyQuestionTypeEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_SurveyResultEntity = {
  __typename?: 'PageableList_SurveyResultEntity';
  result?: Maybe<Array<Maybe<SurveyResultEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_SurveyStateEntity = {
  __typename?: 'PageableList_SurveyStateEntity';
  result?: Maybe<Array<Maybe<SurveyStateEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_ThemeEntity = {
  __typename?: 'PageableList_ThemeEntity';
  result?: Maybe<Array<Maybe<ThemeEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_UserContextEntity = {
  __typename?: 'PageableList_UserContextEntity';
  result?: Maybe<Array<Maybe<UserContextEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_UserDeletionEntity = {
  __typename?: 'PageableList_UserDeletionEntity';
  result?: Maybe<Array<Maybe<UserDeletionEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_UserDeletionTypeEntity = {
  __typename?: 'PageableList_UserDeletionTypeEntity';
  result?: Maybe<Array<Maybe<UserDeletionTypeEntity>>>;
  total: Scalars['Long']['output'];
};

export type PageableList_UserEntity = {
  __typename?: 'PageableList_UserEntity';
  result?: Maybe<Array<Maybe<UserEntity>>>;
  total: Scalars['Long']['output'];
};

export type PasswordResetEntity = {
  __typename?: 'PasswordResetEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserEntity>;
};

export type PasswordResetEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserEntityInput>;
};

export type PluginEntity = {
  __typename?: 'PluginEntity';
  active?: Maybe<Scalars['Boolean']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  menuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  released?: Maybe<Scalars['Boolean']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<PluginTranslatableEntity>>>;
};

export type PluginEntityInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  menuItems?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  released?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<PluginTranslatableEntityInput>>>;
};

export type PluginTranslatableEntity = {
  __typename?: 'PluginTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
};

export type PluginTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type PrivilegeApplicationEntity = {
  __typename?: 'PrivilegeApplicationEntity';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  privilege?: Maybe<RolePrivilegeEntity>;
  translatables?: Maybe<Array<Maybe<PrivilegeApplicationTranslatableEntity>>>;
  user?: Maybe<UserEntity>;
};

export type PrivilegeApplicationEntityInput = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  privilege?: InputMaybe<RolePrivilegeEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<PrivilegeApplicationTranslatableEntityInput>>>;
  user?: InputMaybe<UserEntityInput>;
};

export type PrivilegeApplicationTranslatableEntity = {
  __typename?: 'PrivilegeApplicationTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<PrivilegeApplicationEntity>;
};

export type PrivilegeApplicationTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  parent?: InputMaybe<PrivilegeApplicationEntityInput>;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  getAddress?: Maybe<AddressEntity>;
  getAddresses?: Maybe<PageableList_AddressEntity>;
  getAdminFooterItem?: Maybe<AdminFooterItemEntity>;
  getAdminFooterItems?: Maybe<PageableList_AdminFooterItemEntity>;
  getAdminFooterParent?: Maybe<AdminFooterParentEntity>;
  getAdminFooterParents?: Maybe<PageableList_AdminFooterParentEntity>;
  getApp?: Maybe<AppEntity>;
  getApps?: Maybe<PageableList_AppEntity>;
  getArticle?: Maybe<ArticleEntity>;
  getArticleCategories?: Maybe<PageableList_ArticleCategoryEntity>;
  getArticleCategory?: Maybe<ArticleCategoryEntity>;
  getArticleComment?: Maybe<ArticleCommentEntity>;
  getArticleComments?: Maybe<PageableList_ArticleCommentEntity>;
  getArticleMedia?: Maybe<PageableList_ArticleMediaEntity>;
  getArticleMedium?: Maybe<ArticleMediaEntity>;
  getArticlePublicAuthor?: Maybe<ArticlePublicAuthorEntity>;
  getArticlePublicAuthors?: Maybe<PageableList_ArticlePublicAuthorEntity>;
  getArticleRating?: Maybe<ArticleRatingEntity>;
  getArticleRatings?: Maybe<PageableList_ArticleRatingEntity>;
  getArticles?: Maybe<PageableList_ArticleEntity>;
  getConfiguration?: Maybe<ConfigurationEntity>;
  getConfigurations?: Maybe<PageableList_ConfigurationEntity>;
  getContact?: Maybe<ContactEntity>;
  getContacts?: Maybe<PageableList_ContactEntity>;
  getContesParticipation?: Maybe<ContestParticipationEntity>;
  getContest?: Maybe<ContestEntity>;
  getContestComment?: Maybe<ContestCommentEntity>;
  getContestComments?: Maybe<PageableList_ContestCommentEntity>;
  getContestParticipations?: Maybe<PageableList_ContestParticipationEntity>;
  getContestType?: Maybe<ContestTypeEntity>;
  getContestTypes?: Maybe<PageableList_ContestTypeEntity>;
  getContestVote?: Maybe<ContestVoteEntity>;
  getContestVotes?: Maybe<PageableList_ContestVoteEntity>;
  getContests?: Maybe<PageableList_ContestEntity>;
  getDeal?: Maybe<DealEntity>;
  getDealCategories?: Maybe<PageableList_DealCategoryEntity>;
  getDealCategory?: Maybe<DealCategoryEntity>;
  getDealMedia?: Maybe<PageableList_DealMediaEntity>;
  getDealMedium?: Maybe<DealMediaEntity>;
  getDeals?: Maybe<PageableList_DealEntity>;
  getErrorMessage?: Maybe<ErrorMessageEntity>;
  getErrorMessages?: Maybe<PageableList_ErrorMessageEntity>;
  getEvent?: Maybe<EventEntity>;
  getEventAttendee?: Maybe<EventAttendeeEntity>;
  getEventAttendees?: Maybe<PageableList_EventAttendeeEntity>;
  getEventCategories?: Maybe<PageableList_EventCategoryEntity>;
  getEventCategory?: Maybe<EventCategoryEntity>;
  getEventComment?: Maybe<EventCommentEntity>;
  getEventComments?: Maybe<PageableList_EventCommentEntity>;
  getEventMedia?: Maybe<PageableList_EventMediaEntity>;
  getEventMedium?: Maybe<EventMediaEntity>;
  getEventRating?: Maybe<EventRatingEntity>;
  getEventRatings?: Maybe<PageableList_EventRatingEntity>;
  getEventSchedule?: Maybe<EventScheduleEntity>;
  getEventSchedules?: Maybe<PageableList_EventScheduleEntity>;
  getEventTargetGroup?: Maybe<EventTargetGroupEntity>;
  getEventTargetGroups?: Maybe<PageableList_EventTargetGroupEntity>;
  getEvents?: Maybe<PageableList_EventEntity>;
  getFriend?: Maybe<FriendEntity>;
  getFriends?: Maybe<PageableList_FriendEntity>;
  getInfoMedia?: Maybe<PageableList_InfoMediaEntity>;
  getInfoMediaCategories?: Maybe<PageableList_InfoMediaCategoryEntity>;
  getInfoMediaCategory?: Maybe<InfoMediaCategoryEntity>;
  getInfoMedium?: Maybe<InfoMediaEntity>;
  getInformation?: Maybe<InformationDto>;
  getLabel?: Maybe<LabelEntity>;
  getLabels?: Maybe<PageableList_LabelEntity>;
  getLanguage?: Maybe<LanguageEntity>;
  getLanguages?: Maybe<PageableList_LanguageEntity>;
  getMenuItem?: Maybe<MenuItemEntity>;
  getMenuItems?: Maybe<PageableList_MenuItemEntity>;
  getMessageDefinition?: Maybe<MessageDefinitionEntity>;
  getMessageDefinitions?: Maybe<PageableList_MessageDefinitionEntity>;
  getMessageTemplate?: Maybe<MessageTemplateEntity>;
  getMessageTemplates?: Maybe<PageableList_MessageTemplateEntity>;
  getMilestone?: Maybe<MilestoneEntity>;
  getMilestoneElement?: Maybe<MilestoneElementEntity>;
  getMilestoneElements?: Maybe<PageableList_MilestoneElementEntity>;
  getMilestoneMedia?: Maybe<PageableList_MilestoneMediaEntity>;
  getMilestoneMedium?: Maybe<MilestoneMediaEntity>;
  getMilestones?: Maybe<PageableList_MilestoneEntity>;
  getNotification?: Maybe<NotificationEntity>;
  getNotifications?: Maybe<PageableList_NotificationEntity>;
  getOrganisation?: Maybe<OrganisationEntity>;
  getOrganisationComment?: Maybe<OrganisationCommentEntity>;
  getOrganisationComments?: Maybe<PageableList_OrganisationCommentEntity>;
  getOrganisationConfiguration?: Maybe<OrganisationConfigurationEntity>;
  getOrganisationConfigurations?: Maybe<PageableList_OrganisationConfigurationEntity>;
  getOrganisationMedia?: Maybe<PageableList_OrganisationMediaEntity>;
  getOrganisationMedium?: Maybe<OrganisationMediaEntity>;
  getOrganisationMember?: Maybe<OrganisationMemberEntity>;
  getOrganisationMembers?: Maybe<PageableList_OrganisationMemberEntity>;
  getOrganisationRating?: Maybe<OrganisationRatingEntity>;
  getOrganisationRatings?: Maybe<PageableList_OrganisationRatingEntity>;
  getOrganisations?: Maybe<PageableList_OrganisationEntity>;
  getPage?: Maybe<PageEntity>;
  getPageEmbedding?: Maybe<PageEmbeddingEntity>;
  getPageEmbeddingType?: Maybe<PageEmbeddingTypeEntity>;
  getPageEmbeddingTypes?: Maybe<PageableList_PageEmbeddingTypeEntity>;
  getPageEmbeddings?: Maybe<PageableList_PageEmbeddingEntity>;
  getPages?: Maybe<PageableList_PageEntity>;
  getPlugin?: Maybe<PluginEntity>;
  getPlugins?: Maybe<PageableList_PluginEntity>;
  getPrivilegeApplication?: Maybe<PrivilegeApplicationEntity>;
  getPrivilegeApplications?: Maybe<PageableList_PrivilegeApplicationEntity>;
  getQuestionOption?: Maybe<SurveyQuestionOptionEntity>;
  getQuestionOptions?: Maybe<PageableList_SurveyQuestionOptionEntity>;
  getQuestionType?: Maybe<SurveyQuestionTypeEntity>;
  getQuestionTypes?: Maybe<PageableList_SurveyQuestionTypeEntity>;
  getReport?: Maybe<ReportEntity>;
  getReportType?: Maybe<ReportTypeEntity>;
  getReportTypes?: Maybe<PageableList_ReportTypeEntity>;
  getReports?: Maybe<PageableList_ReportEntity>;
  getRole?: Maybe<RoleEntity>;
  getRolePrivilege?: Maybe<RolePrivilegeEntity>;
  getRolePrivileges?: Maybe<PageableList_RolePrivilegeEntity>;
  getRoles?: Maybe<PageableList_RoleEntity>;
  getSearchStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  getSocialMedia?: Maybe<SocialMediaEntity>;
  getSocialMedias?: Maybe<PageableList_SocialMediaEntity>;
  getSubscription?: Maybe<SubscriptionEntity>;
  getSubscriptions?: Maybe<PageableList_SubscriptionEntity>;
  getSuburb?: Maybe<SuburbEntity>;
  getSuburbs?: Maybe<PageableList_SuburbEntity>;
  getSurvey?: Maybe<SurveyEntity>;
  getSurveyAnswer?: Maybe<SurveyAnswerEntity>;
  getSurveyAnswers?: Maybe<PageableList_SurveyAnswerEntity>;
  getSurveyAssignment?: Maybe<SurveyAssignmentEntity>;
  getSurveyAssignments?: Maybe<PageableList_SurveyAssignmentEntity>;
  getSurveyQuestion?: Maybe<SurveyQuestionEntity>;
  getSurveyQuestions?: Maybe<PageableList_SurveyQuestionEntity>;
  getSurveyResult?: Maybe<SurveyResultEntity>;
  getSurveyResults?: Maybe<PageableList_SurveyResultEntity>;
  getSurveyState?: Maybe<SurveyStateEntity>;
  getSurveyStates?: Maybe<PageableList_SurveyStateEntity>;
  getSurveys?: Maybe<PageableList_SurveyEntity>;
  getTheme?: Maybe<ThemeEntity>;
  getThemes?: Maybe<PageableList_ThemeEntity>;
  getUser?: Maybe<UserEntity>;
  getUserContext?: Maybe<UserContextEntity>;
  getUserContexts?: Maybe<PageableList_UserContextEntity>;
  getUserDeletion?: Maybe<UserDeletionEntity>;
  getUserDeletionType?: Maybe<UserDeletionTypeEntity>;
  getUserDeletionTypes?: Maybe<PageableList_UserDeletionTypeEntity>;
  getUserDeletions?: Maybe<PageableList_UserDeletionEntity>;
  getUsers?: Maybe<PageableList_UserEntity>;
  me?: Maybe<UserContextEntity>;
  search?: Maybe<Array<Maybe<SearchDto>>>;
};


/** Query root */
export type QueryGetAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
};


/** Query root */
export type QueryGetAddressesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAdminFooterItemArgs = {
  entity?: InputMaybe<AdminFooterItemEntityInput>;
};


/** Query root */
export type QueryGetAdminFooterItemsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAdminFooterParentArgs = {
  entity?: InputMaybe<AdminFooterParentEntityInput>;
};


/** Query root */
export type QueryGetAdminFooterParentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAppArgs = {
  entity?: InputMaybe<AppEntityInput>;
};


/** Query root */
export type QueryGetAppsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetArticleArgs = {
  entity?: InputMaybe<ArticleEntityInput>;
};


/** Query root */
export type QueryGetArticleCategoriesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetArticleCategoryArgs = {
  entity?: InputMaybe<ArticleCategoryEntityInput>;
};


/** Query root */
export type QueryGetArticleCommentArgs = {
  entity?: InputMaybe<ArticleCommentEntityInput>;
};


/** Query root */
export type QueryGetArticleCommentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetArticleMediaArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetArticleMediumArgs = {
  entity?: InputMaybe<ArticleMediaEntityInput>;
};


/** Query root */
export type QueryGetArticlePublicAuthorArgs = {
  entity?: InputMaybe<ArticlePublicAuthorEntityInput>;
};


/** Query root */
export type QueryGetArticlePublicAuthorsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetArticleRatingArgs = {
  entity?: InputMaybe<ArticleRatingEntityInput>;
};


/** Query root */
export type QueryGetArticleRatingsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetArticlesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetConfigurationArgs = {
  entity?: InputMaybe<ConfigurationEntityInput>;
};


/** Query root */
export type QueryGetConfigurationsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetContactArgs = {
  entity?: InputMaybe<ContactEntityInput>;
};


/** Query root */
export type QueryGetContactsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetContesParticipationArgs = {
  entity?: InputMaybe<ContestParticipationEntityInput>;
};


/** Query root */
export type QueryGetContestArgs = {
  entity?: InputMaybe<ContestEntityInput>;
};


/** Query root */
export type QueryGetContestCommentArgs = {
  entity?: InputMaybe<ContestCommentEntityInput>;
};


/** Query root */
export type QueryGetContestCommentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetContestParticipationsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetContestTypeArgs = {
  entity?: InputMaybe<ContestTypeEntityInput>;
};


/** Query root */
export type QueryGetContestTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetContestVoteArgs = {
  entity?: InputMaybe<ContestVoteEntityInput>;
};


/** Query root */
export type QueryGetContestVotesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetContestsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetDealArgs = {
  entity?: InputMaybe<DealEntityInput>;
};


/** Query root */
export type QueryGetDealCategoriesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetDealCategoryArgs = {
  entity?: InputMaybe<DealCategoryEntityInput>;
};


/** Query root */
export type QueryGetDealMediaArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetDealMediumArgs = {
  entity?: InputMaybe<DealMediaEntityInput>;
};


/** Query root */
export type QueryGetDealsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetErrorMessageArgs = {
  entity?: InputMaybe<ErrorMessageEntityInput>;
};


/** Query root */
export type QueryGetErrorMessagesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventArgs = {
  entity?: InputMaybe<EventEntityInput>;
};


/** Query root */
export type QueryGetEventAttendeeArgs = {
  entity?: InputMaybe<EventAttendeeEntityInput>;
};


/** Query root */
export type QueryGetEventAttendeesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventCategoriesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventCategoryArgs = {
  entity?: InputMaybe<EventCategoryEntityInput>;
};


/** Query root */
export type QueryGetEventCommentArgs = {
  entity?: InputMaybe<EventCommentEntityInput>;
};


/** Query root */
export type QueryGetEventCommentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventMediaArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventMediumArgs = {
  entity?: InputMaybe<EventMediaEntityInput>;
};


/** Query root */
export type QueryGetEventRatingArgs = {
  entity?: InputMaybe<EventRatingEntityInput>;
};


/** Query root */
export type QueryGetEventRatingsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventScheduleArgs = {
  entity?: InputMaybe<EventScheduleEntityInput>;
};


/** Query root */
export type QueryGetEventSchedulesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventTargetGroupArgs = {
  entity?: InputMaybe<EventTargetGroupEntityInput>;
};


/** Query root */
export type QueryGetEventTargetGroupsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetFriendArgs = {
  entity?: InputMaybe<FriendEntityInput>;
};


/** Query root */
export type QueryGetFriendsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetInfoMediaArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetInfoMediaCategoriesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetInfoMediaCategoryArgs = {
  entity?: InputMaybe<InfoMediaCategoryEntityInput>;
};


/** Query root */
export type QueryGetInfoMediumArgs = {
  entity?: InputMaybe<InfoMediaEntityInput>;
};


/** Query root */
export type QueryGetLabelArgs = {
  entity?: InputMaybe<LabelEntityInput>;
};


/** Query root */
export type QueryGetLabelsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetLanguageArgs = {
  entity?: InputMaybe<LanguageEntityInput>;
};


/** Query root */
export type QueryGetLanguagesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetMenuItemArgs = {
  entity?: InputMaybe<MenuItemEntityInput>;
};


/** Query root */
export type QueryGetMenuItemsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetMessageDefinitionArgs = {
  entity?: InputMaybe<MessageDefinitionEntityInput>;
};


/** Query root */
export type QueryGetMessageDefinitionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetMessageTemplateArgs = {
  entity?: InputMaybe<MessageTemplateEntityInput>;
};


/** Query root */
export type QueryGetMessageTemplatesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetMilestoneArgs = {
  entity?: InputMaybe<MilestoneEntityInput>;
};


/** Query root */
export type QueryGetMilestoneElementArgs = {
  entity?: InputMaybe<MilestoneElementEntityInput>;
};


/** Query root */
export type QueryGetMilestoneElementsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetMilestoneMediaArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetMilestoneMediumArgs = {
  entity?: InputMaybe<MilestoneMediaEntityInput>;
};


/** Query root */
export type QueryGetMilestonesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetNotificationArgs = {
  entity?: InputMaybe<NotificationEntityInput>;
};


/** Query root */
export type QueryGetNotificationsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetOrganisationArgs = {
  entity?: InputMaybe<OrganisationEntityInput>;
};


/** Query root */
export type QueryGetOrganisationCommentArgs = {
  entity?: InputMaybe<OrganisationCommentEntityInput>;
};


/** Query root */
export type QueryGetOrganisationCommentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetOrganisationConfigurationArgs = {
  entity?: InputMaybe<OrganisationConfigurationEntityInput>;
};


/** Query root */
export type QueryGetOrganisationConfigurationsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetOrganisationMediaArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetOrganisationMediumArgs = {
  entity?: InputMaybe<OrganisationMediaEntityInput>;
};


/** Query root */
export type QueryGetOrganisationMemberArgs = {
  entity?: InputMaybe<OrganisationMemberEntityInput>;
};


/** Query root */
export type QueryGetOrganisationMembersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetOrganisationRatingArgs = {
  entity?: InputMaybe<OrganisationRatingEntityInput>;
};


/** Query root */
export type QueryGetOrganisationRatingsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetOrganisationsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetPageArgs = {
  entity?: InputMaybe<PageEntityInput>;
};


/** Query root */
export type QueryGetPageEmbeddingArgs = {
  entity?: InputMaybe<PageEmbeddingEntityInput>;
};


/** Query root */
export type QueryGetPageEmbeddingTypeArgs = {
  entity?: InputMaybe<PageEmbeddingTypeEntityInput>;
};


/** Query root */
export type QueryGetPageEmbeddingTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetPageEmbeddingsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetPagesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetPluginArgs = {
  entity?: InputMaybe<PluginEntityInput>;
};


/** Query root */
export type QueryGetPluginsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetPrivilegeApplicationArgs = {
  entity?: InputMaybe<PrivilegeApplicationEntityInput>;
};


/** Query root */
export type QueryGetPrivilegeApplicationsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionOptionArgs = {
  entity?: InputMaybe<SurveyQuestionOptionEntityInput>;
};


/** Query root */
export type QueryGetQuestionOptionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionTypeArgs = {
  entity?: InputMaybe<SurveyQuestionTypeEntityInput>;
};


/** Query root */
export type QueryGetQuestionTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetReportArgs = {
  entity?: InputMaybe<ReportEntityInput>;
};


/** Query root */
export type QueryGetReportTypeArgs = {
  entity?: InputMaybe<ReportTypeEntityInput>;
};


/** Query root */
export type QueryGetReportTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetReportsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};


/** Query root */
export type QueryGetRolePrivilegeArgs = {
  entity?: InputMaybe<RolePrivilegeEntityInput>;
};


/** Query root */
export type QueryGetRolePrivilegesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetRolesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSearchStatisticsArgs = {
  dimension?: InputMaybe<SearchConsoleDimension>;
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  filter?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


/** Query root */
export type QueryGetSocialMediaArgs = {
  entity?: InputMaybe<SocialMediaEntityInput>;
};


/** Query root */
export type QueryGetSocialMediasArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSubscriptionArgs = {
  entity?: InputMaybe<SubscriptionEntityInput>;
};


/** Query root */
export type QueryGetSubscriptionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSuburbArgs = {
  entity?: InputMaybe<SuburbEntityInput>;
};


/** Query root */
export type QueryGetSuburbsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSurveyArgs = {
  entity?: InputMaybe<SurveyEntityInput>;
};


/** Query root */
export type QueryGetSurveyAnswerArgs = {
  entity?: InputMaybe<SurveyAnswerEntityInput>;
};


/** Query root */
export type QueryGetSurveyAnswersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSurveyAssignmentArgs = {
  entity?: InputMaybe<SurveyAssignmentEntityInput>;
};


/** Query root */
export type QueryGetSurveyAssignmentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSurveyQuestionArgs = {
  entity?: InputMaybe<SurveyQuestionEntityInput>;
};


/** Query root */
export type QueryGetSurveyQuestionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSurveyResultArgs = {
  entity?: InputMaybe<SurveyResultEntityInput>;
};


/** Query root */
export type QueryGetSurveyResultsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSurveyStateArgs = {
  entity?: InputMaybe<SurveyStateEntityInput>;
};


/** Query root */
export type QueryGetSurveyStatesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSurveysArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetThemeArgs = {
  entity?: InputMaybe<ThemeEntityInput>;
};


/** Query root */
export type QueryGetThemesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetUserArgs = {
  entity?: InputMaybe<UserEntityInput>;
};


/** Query root */
export type QueryGetUserContextArgs = {
  entity?: InputMaybe<UserContextEntityInput>;
};


/** Query root */
export type QueryGetUserContextsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetUserDeletionArgs = {
  entity?: InputMaybe<UserDeletionEntityInput>;
};


/** Query root */
export type QueryGetUserDeletionTypeArgs = {
  entity?: InputMaybe<UserDeletionTypeEntityInput>;
};


/** Query root */
export type QueryGetUserDeletionTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetUserDeletionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetUsersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QuerySearchArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryConjunctionInput = {
  operands?: InputMaybe<Array<InputMaybe<QueryExpressionInput>>>;
  operator?: InputMaybe<ConjunctionOperator>;
};

export type QueryEntityInput = {
  operator?: InputMaybe<QueryOperator>;
  path?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type QueryExpressionInput = {
  conjunction?: InputMaybe<QueryConjunctionInput>;
  entity?: InputMaybe<QueryEntityInput>;
};

export enum QueryOperator {
  Equal = 'EQUAL',
  GreaterOrEqual = 'GREATER_OR_EQUAL',
  GreaterThan = 'GREATER_THAN',
  LessOrEqual = 'LESS_OR_EQUAL',
  LessThan = 'LESS_THAN',
  Like = 'LIKE',
  NotEqual = 'NOT_EQUAL'
}

export type ReportEntity = {
  __typename?: 'ReportEntity';
  captchaToken?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<ReportTranslatableEntity>>>;
  type?: Maybe<ReportTypeEntity>;
  uploads?: Maybe<Array<Maybe<ReportMediaEntity>>>;
};

export type ReportEntityInput = {
  captchaToken?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<ReportTranslatableEntityInput>>>;
  type?: InputMaybe<ReportTypeEntityInput>;
  uploads?: InputMaybe<Array<InputMaybe<ReportMediaEntityInput>>>;
};

export type ReportMediaEntity = {
  __typename?: 'ReportMediaEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  report?: Maybe<ReportEntity>;
};

export type ReportMediaEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  report?: InputMaybe<ReportEntityInput>;
};

export type ReportTranslatableEntity = {
  __typename?: 'ReportTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type ReportTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type ReportTypeEntity = {
  __typename?: 'ReportTypeEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reports?: Maybe<Array<Maybe<ReportEntity>>>;
  translatables?: Maybe<Array<Maybe<ReportTypeTranslatableEntity>>>;
};

export type ReportTypeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reports?: InputMaybe<Array<InputMaybe<ReportEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<ReportTypeTranslatableEntityInput>>>;
};

export type ReportTypeTranslatableEntity = {
  __typename?: 'ReportTypeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ReportTypeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type RoleEntity = {
  __typename?: 'RoleEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  privileges?: Maybe<Array<Maybe<RolePrivilegeEntity>>>;
  translatables?: Maybe<Array<Maybe<RoleTranslatableEntity>>>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type RoleEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  privileges?: InputMaybe<Array<InputMaybe<RolePrivilegeEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<RoleTranslatableEntityInput>>>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type RolePrivilegeEntity = {
  __typename?: 'RolePrivilegeEntity';
  applications?: Maybe<Array<Maybe<PrivilegeApplicationEntity>>>;
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<RoleEntity>>>;
  translatables?: Maybe<Array<Maybe<RolePrivilegeTranslatableEntity>>>;
};

export type RolePrivilegeEntityInput = {
  applications?: InputMaybe<Array<InputMaybe<PrivilegeApplicationEntityInput>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<RolePrivilegeTranslatableEntityInput>>>;
};

export type RolePrivilegeTranslatableEntity = {
  __typename?: 'RolePrivilegeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<RolePrivilegeEntity>;
};

export type RolePrivilegeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<RolePrivilegeEntityInput>;
};

export type RoleTranslatableEntity = {
  __typename?: 'RoleTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<RoleEntity>;
};

export type RoleTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<RoleEntityInput>;
};

export enum SearchConsoleDimension {
  Country = 'country',
  Date = 'date',
  Device = 'device',
  Page = 'page',
  Query = 'query'
}

export type SearchDto = {
  __typename?: 'SearchDto';
  name?: Maybe<Scalars['String']['output']>;
  plugin?: Maybe<PluginEntity>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type SocialMediaEntity = {
  __typename?: 'SocialMediaEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SocialMediaEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionEntity = {
  __typename?: 'SubscriptionEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  deviceToken?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  user?: Maybe<UserEntity>;
};

export type SubscriptionEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  deviceToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  user?: InputMaybe<UserEntityInput>;
};

export type SuburbEntity = {
  __typename?: 'SuburbEntity';
  addresses?: Maybe<Array<Maybe<AddressEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SuburbEntityInput = {
  addresses?: InputMaybe<Array<InputMaybe<AddressEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SurveyAnswerEntity = {
  __typename?: 'SurveyAnswerEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  question?: Maybe<SurveyQuestionEntity>;
  result?: Maybe<SurveyResultEntity>;
  selectedOptions?: Maybe<Array<Maybe<SurveyQuestionOptionEntity>>>;
  translatables?: Maybe<Array<Maybe<SurveyAnswerTranslatableEntity>>>;
};

export type SurveyAnswerEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  question?: InputMaybe<SurveyQuestionEntityInput>;
  result?: InputMaybe<SurveyResultEntityInput>;
  selectedOptions?: InputMaybe<Array<InputMaybe<SurveyQuestionOptionEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyAnswerTranslatableEntityInput>>>;
};

export type SurveyAnswerTranslatableEntity = {
  __typename?: 'SurveyAnswerTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type SurveyAnswerTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type SurveyAssignmentEntity = {
  __typename?: 'SurveyAssignmentEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  survey?: Maybe<SurveyEntity>;
  userContext?: Maybe<UserContextEntity>;
};

export type SurveyAssignmentEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  survey?: InputMaybe<SurveyEntityInput>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type SurveyEntity = {
  __typename?: 'SurveyEntity';
  assignments?: Maybe<Array<Maybe<SurveyAssignmentEntity>>>;
  contact?: Maybe<ContactEntity>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mandatory?: Maybe<Scalars['Boolean']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  searchStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  slug?: Maybe<Scalars['String']['output']>;
  sponsored?: Maybe<Scalars['Boolean']['output']>;
  startDate?: Maybe<Scalars['OffsetDateTime']['output']>;
  state?: Maybe<SurveyStateEntity>;
  translatables?: Maybe<Array<Maybe<SurveyTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<SurveyMediaEntity>>>;
  visitorStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  visitors?: Maybe<Array<Maybe<SurveyVisitorEntity>>>;
};


export type SurveyEntitySearchStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};


export type SurveyEntityVisitorStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type SurveyEntityInput = {
  assignments?: InputMaybe<Array<InputMaybe<SurveyAssignmentEntityInput>>>;
  contact?: InputMaybe<ContactEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mandatory?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sponsored?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  state?: InputMaybe<SurveyStateEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<SurveyMediaEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<SurveyVisitorEntityInput>>>;
};

export type SurveyMediaEntity = {
  __typename?: 'SurveyMediaEntity';
  card?: Maybe<Scalars['Boolean']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  survey?: Maybe<SurveyEntity>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type SurveyMediaEntityInput = {
  card?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  survey?: InputMaybe<SurveyEntityInput>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SurveyQuestionEntity = {
  __typename?: 'SurveyQuestionEntity';
  answers?: Maybe<Array<Maybe<SurveyAnswerEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  questionOptions?: Maybe<Array<Maybe<SurveyQuestionOptionEntity>>>;
  subject?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<SurveyQuestionTranslatableEntity>>>;
  type?: Maybe<SurveyQuestionTypeEntity>;
};

export type SurveyQuestionEntityInput = {
  answers?: InputMaybe<Array<InputMaybe<SurveyAnswerEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  questionOptions?: InputMaybe<Array<InputMaybe<SurveyQuestionOptionEntityInput>>>;
  subject?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyQuestionTranslatableEntityInput>>>;
  type?: InputMaybe<SurveyQuestionTypeEntityInput>;
};

export type SurveyQuestionOptionEntity = {
  __typename?: 'SurveyQuestionOptionEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  question?: Maybe<SurveyQuestionEntity>;
  translatables?: Maybe<Array<Maybe<SurveyQuestionOptionTranslatableEntity>>>;
};

export type SurveyQuestionOptionEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<SurveyQuestionEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyQuestionOptionTranslatableEntityInput>>>;
};

export type SurveyQuestionOptionTranslatableEntity = {
  __typename?: 'SurveyQuestionOptionTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type SurveyQuestionOptionTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type SurveyQuestionTranslatableEntity = {
  __typename?: 'SurveyQuestionTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
};

export type SurveyQuestionTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type SurveyQuestionTypeEntity = {
  __typename?: 'SurveyQuestionTypeEntity';
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  questions?: Maybe<Array<Maybe<SurveyQuestionEntity>>>;
};

export type SurveyQuestionTypeEntityInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  questions?: InputMaybe<Array<InputMaybe<SurveyQuestionEntityInput>>>;
};

export type SurveyResultEntity = {
  __typename?: 'SurveyResultEntity';
  answer?: Maybe<Array<Maybe<SurveyAnswerEntity>>>;
  comment?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  survey?: Maybe<SurveyEntity>;
  translatables?: Maybe<Array<Maybe<SurveyResultTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type SurveyResultEntityInput = {
  answer?: InputMaybe<Array<InputMaybe<SurveyAnswerEntityInput>>>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  survey?: InputMaybe<SurveyEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyResultTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type SurveyResultTranslatableEntity = {
  __typename?: 'SurveyResultTranslatableEntity';
  comment?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type SurveyResultTranslatableEntityInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type SurveyStateEntity = {
  __typename?: 'SurveyStateEntity';
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  survey?: Maybe<Array<Maybe<SurveyEntity>>>;
};

export type SurveyStateEntityInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  survey?: InputMaybe<Array<InputMaybe<SurveyEntityInput>>>;
};

export type SurveyTranslatableEntity = {
  __typename?: 'SurveyTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SurveyTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SurveyVisitorEntity = {
  __typename?: 'SurveyVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  parent?: Maybe<SurveyEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']['output']>;
};

export type SurveyVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  visits?: InputMaybe<Scalars['Int']['input']>;
};

export type ThemeEntity = {
  __typename?: 'ThemeEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  variables?: Maybe<Array<Maybe<ThemeVariableEntity>>>;
};

export type ThemeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  variables?: InputMaybe<Array<InputMaybe<ThemeVariableEntityInput>>>;
};

export type ThemeVariableEntity = {
  __typename?: 'ThemeVariableEntity';
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  theme?: Maybe<ThemeEntity>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ThemeVariableEntityInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  theme?: InputMaybe<ThemeEntityInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TokenDto = {
  __typename?: 'TokenDto';
  access?: Maybe<Scalars['String']['output']>;
  refresh?: Maybe<Scalars['String']['output']>;
};

export type UserContextEntity = {
  __typename?: 'UserContextEntity';
  address?: Maybe<AddressEntity>;
  articleRatings?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  articles?: Maybe<Array<Maybe<ArticleEntity>>>;
  assignments?: Maybe<Array<Maybe<SurveyAssignmentEntity>>>;
  attendedEvents?: Maybe<Array<Maybe<EventAttendeeEntity>>>;
  contacts?: Maybe<Array<Maybe<ContactEntity>>>;
  contestPariticpations?: Maybe<Array<Maybe<ContestParticipationEntity>>>;
  contestVotes?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  deals?: Maybe<Array<Maybe<DealEntity>>>;
  description?: Maybe<Scalars['String']['output']>;
  eventComment?: Maybe<Array<Maybe<EventCommentEntity>>>;
  eventRatings?: Maybe<Array<Maybe<EventRatingEntity>>>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  favoriteArticles?: Maybe<Array<Maybe<ArticleEntity>>>;
  favoriteAuthors?: Maybe<Array<Maybe<UserContextEntity>>>;
  favoriteDeals?: Maybe<Array<Maybe<DealEntity>>>;
  favoriteEvents?: Maybe<Array<Maybe<EventEntity>>>;
  favoriteOrganisations?: Maybe<Array<Maybe<OrganisationEntity>>>;
  favoritingUsers?: Maybe<Array<Maybe<UserContextEntity>>>;
  id?: Maybe<Scalars['String']['output']>;
  members?: Maybe<Array<Maybe<OrganisationMemberEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  organisationRatings?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  receivedFriendRequests?: Maybe<Array<Maybe<FriendEntity>>>;
  sentFriendRequests?: Maybe<Array<Maybe<FriendEntity>>>;
  slug?: Maybe<Scalars['String']['output']>;
  surveyResults?: Maybe<Array<Maybe<SurveyResultEntity>>>;
  translatables?: Maybe<Array<Maybe<UserContextTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<UserContextMediaEntity>>>;
  user?: Maybe<UserEntity>;
  userFormTemplate?: Maybe<Array<Maybe<UserFormTemplateEntity>>>;
};

export type UserContextEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  articleRatings?: InputMaybe<Array<InputMaybe<ArticleRatingEntityInput>>>;
  articles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  assignments?: InputMaybe<Array<InputMaybe<SurveyAssignmentEntityInput>>>;
  attendedEvents?: InputMaybe<Array<InputMaybe<EventAttendeeEntityInput>>>;
  contacts?: InputMaybe<Array<InputMaybe<ContactEntityInput>>>;
  contestPariticpations?: InputMaybe<Array<InputMaybe<ContestParticipationEntityInput>>>;
  contestVotes?: InputMaybe<Array<InputMaybe<ContestVoteEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  deals?: InputMaybe<Array<InputMaybe<DealEntityInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventComment?: InputMaybe<Array<InputMaybe<EventCommentEntityInput>>>;
  eventRatings?: InputMaybe<Array<InputMaybe<EventRatingEntityInput>>>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoriteArticles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  favoriteAuthors?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  favoriteDeals?: InputMaybe<Array<InputMaybe<DealEntityInput>>>;
  favoriteEvents?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoriteOrganisations?: InputMaybe<Array<InputMaybe<OrganisationEntityInput>>>;
  favoritingUsers?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<Array<InputMaybe<OrganisationMemberEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  organisationRatings?: InputMaybe<Array<InputMaybe<OrganisationRatingEntityInput>>>;
  receivedFriendRequests?: InputMaybe<Array<InputMaybe<FriendEntityInput>>>;
  sentFriendRequests?: InputMaybe<Array<InputMaybe<FriendEntityInput>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  surveyResults?: InputMaybe<Array<InputMaybe<SurveyResultEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<UserContextTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<UserContextMediaEntityInput>>>;
  user?: InputMaybe<UserEntityInput>;
  userFormTemplate?: InputMaybe<Array<InputMaybe<UserFormTemplateEntityInput>>>;
};

export type UserContextMediaEntity = {
  __typename?: 'UserContextMediaEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  profilePicture?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  userContext?: Maybe<UserContextEntity>;
};

export type UserContextMediaEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  profilePicture?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type UserContextTranslatableEntity = {
  __typename?: 'UserContextTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type UserContextTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type UserDeletionEntity = {
  __typename?: 'UserDeletionEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  translatables?: Maybe<Array<Maybe<UserDeletionTranslatableEntity>>>;
  types?: Maybe<Array<Maybe<UserDeletionTypeEntity>>>;
};

export type UserDeletionEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<UserDeletionTranslatableEntityInput>>>;
  types?: InputMaybe<Array<InputMaybe<UserDeletionTypeEntityInput>>>;
};

export type UserDeletionTranslatableEntity = {
  __typename?: 'UserDeletionTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type UserDeletionTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type UserDeletionTypeEntity = {
  __typename?: 'UserDeletionTypeEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<UserDeletionTypeTranslatableEntity>>>;
};

export type UserDeletionTypeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<UserDeletionTypeTranslatableEntityInput>>>;
};

export type UserDeletionTypeTranslatableEntity = {
  __typename?: 'UserDeletionTypeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserDeletionTypeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  captchaToken?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  lastLogin?: Maybe<Scalars['OffsetDateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  notifications?: Maybe<Array<Maybe<NotificationEntity>>>;
  password?: Maybe<Scalars['String']['output']>;
  passwordResets?: Maybe<Array<Maybe<PasswordResetEntity>>>;
  phone?: Maybe<Scalars['String']['output']>;
  privilegeApplications?: Maybe<Array<Maybe<PrivilegeApplicationEntity>>>;
  roles?: Maybe<Array<Maybe<RoleEntity>>>;
  subscriptions?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  termsAccepted?: Maybe<Scalars['Boolean']['output']>;
  verifications?: Maybe<Array<Maybe<VerificationEntity>>>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type UserEntityInput = {
  captchaToken?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<LanguageEntityInput>;
  lastLogin?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  notifications?: InputMaybe<Array<InputMaybe<NotificationEntityInput>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResets?: InputMaybe<Array<InputMaybe<PasswordResetEntityInput>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  privilegeApplications?: InputMaybe<Array<InputMaybe<PrivilegeApplicationEntityInput>>>;
  roles?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
  subscriptions?: InputMaybe<Array<InputMaybe<SubscriptionEntityInput>>>;
  termsAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  verifications?: InputMaybe<Array<InputMaybe<VerificationEntityInput>>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFormTemplateEntity = {
  __typename?: 'UserFormTemplateEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatables?: Maybe<Array<Maybe<UserFormTemplateTranslatableEntity>>>;
  type?: Maybe<FormTemplateTypeEntity>;
  userContext?: Maybe<UserContextEntity>;
};

export type UserFormTemplateEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translatables?: InputMaybe<Array<InputMaybe<UserFormTemplateTranslatableEntityInput>>>;
  type?: InputMaybe<FormTemplateTypeEntityInput>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type UserFormTemplateTranslatableEntity = {
  __typename?: 'UserFormTemplateTranslatableEntity';
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
};

export type UserFormTemplateTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
};

export type VerificationEntity = {
  __typename?: 'VerificationEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserEntity>;
};

export type VerificationEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserEntityInput>;
};

export type VisitorEntity = {
  __typename?: 'VisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['OffsetDateTime']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
};
