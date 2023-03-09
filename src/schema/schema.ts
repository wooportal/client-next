import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Built-in scalar representing an instant in time */
  Date: any;
  /** A 64-bit signed integer */
  Long: any;
  /** Built-in scalar for map-like structures */
  Map_String_StringScalar: any;
  /** Built-in scalar representing a date-time with a UTC offset */
  OffsetDateTime: any;
};

export type AddressEntity = {
  __typename?: 'AddressEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  houseNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  modified?: Maybe<Scalars['OffsetDateTime']>;
  place?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  suburb?: Maybe<SuburbEntity>;
};

export type AddressEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  houseNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  place?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  suburb?: InputMaybe<SuburbEntityInput>;
};

export type AnswerEntity = {
  __typename?: 'AnswerEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  question?: Maybe<QuestionEntity>;
  result?: Maybe<SurveyResultEntity>;
  selectedOptions?: Maybe<Array<Maybe<QuestionOptionEntity>>>;
  translatables?: Maybe<Array<Maybe<AnswerTranslatableEntity>>>;
};

export type AnswerEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  question?: InputMaybe<QuestionEntityInput>;
  result?: InputMaybe<SurveyResultEntityInput>;
  selectedOptions?: InputMaybe<Array<InputMaybe<QuestionOptionEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<AnswerTranslatableEntityInput>>>;
};

export type AnswerTranslatableEntity = {
  __typename?: 'AnswerTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  result?: Maybe<Scalars['String']>;
};

export type AnswerTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  result?: InputMaybe<Scalars['String']>;
};

export type AppEntity = {
  __typename?: 'AppEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  platform?: Maybe<AppPlatformEntity>;
  url?: Maybe<Scalars['String']>;
};

export type AppEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  platform?: InputMaybe<AppPlatformEntityInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type AppPlatformEntity = {
  __typename?: 'AppPlatformEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type AppPlatformEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ArticleCategoryEntity = {
  __typename?: 'ArticleCategoryEntity';
  articles?: Maybe<Array<Maybe<ArticleEntity>>>;
  color?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<ArticleCategoryTranslatableEntity>>>;
};

export type ArticleCategoryEntityInput = {
  articles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  color?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<ArticleCategoryTranslatableEntityInput>>>;
};

export type ArticleCategoryTranslatableEntity = {
  __typename?: 'ArticleCategoryTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<ArticleCategoryEntity>;
};

export type ArticleCategoryTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<ArticleCategoryEntityInput>;
};

export type ArticleCommentEntity = {
  __typename?: 'ArticleCommentEntity';
  approved?: Maybe<Scalars['Boolean']>;
  article?: Maybe<ArticleEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<ArticleCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type ArticleCommentEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  article?: InputMaybe<ArticleEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<ArticleCommentTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type ArticleCommentTranslatableEntity = {
  __typename?: 'ArticleCommentTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<ArticleCommentEntity>;
};

export type ArticleCommentTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  parent?: InputMaybe<ArticleCommentEntityInput>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  approved?: Maybe<Scalars['Boolean']>;
  author?: Maybe<UserContextEntity>;
  cardImage?: Maybe<MediaEntity>;
  category?: Maybe<ArticleCategoryEntity>;
  comments?: Maybe<Array<Maybe<ArticleCommentEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<Array<Maybe<MediaEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  publicAuthor?: Maybe<PublicAuthorEntity>;
  ratings?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  seoDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  titleImage?: Maybe<MediaEntity>;
  visitors?: Maybe<Array<Maybe<ArticleVisitorEntity>>>;
};

export type ArticleEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  author?: InputMaybe<UserContextEntityInput>;
  cardImage?: InputMaybe<MediaEntityInput>;
  category?: InputMaybe<ArticleCategoryEntityInput>;
  comments?: InputMaybe<Array<InputMaybe<ArticleCommentEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  publicAuthor?: InputMaybe<PublicAuthorEntityInput>;
  ratings?: InputMaybe<Array<InputMaybe<ArticleRatingEntityInput>>>;
  seoDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sponsored?: InputMaybe<Scalars['Boolean']>;
  titleImage?: InputMaybe<MediaEntityInput>;
  visitors?: InputMaybe<Array<InputMaybe<ArticleVisitorEntityInput>>>;
};

export type ArticleRatingEntity = {
  __typename?: 'ArticleRatingEntity';
  article?: Maybe<ArticleEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  score?: Maybe<Scalars['Int']>;
  userContext?: Maybe<UserContextEntity>;
};

export type ArticleRatingEntityInput = {
  article?: InputMaybe<ArticleEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  score?: InputMaybe<Scalars['Int']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type ArticleVisitorEntity = {
  __typename?: 'ArticleVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<ArticleEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type ArticleVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type AssignmentEntity = {
  __typename?: 'AssignmentEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  survey?: Maybe<SurveyEntity>;
  userContext?: Maybe<UserContextEntity>;
};

export type AssignmentEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  survey?: InputMaybe<SurveyEntityInput>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type AttendeeConfigurationEntity = {
  __typename?: 'AttendeeConfigurationEntity';
  approval?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  id?: Maybe<Scalars['String']>;
  maxAttendees?: Maybe<Scalars['Int']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type AttendeeConfigurationEntityInput = {
  approval?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  maxAttendees?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type AttendeeEntity = {
  __typename?: 'AttendeeEntity';
  approved?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  userContext?: Maybe<UserContextEntity>;
};

export type AttendeeEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type ChannelEntity = {
  __typename?: 'ChannelEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ChannelEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum ConjunctionOperator {
  And = 'AND',
  AndNot = 'AND_NOT',
  Or = 'OR',
  OrNot = 'OR_NOT'
}

export type ContactEntity = {
  __typename?: 'ContactEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  preferredContact?: Maybe<Scalars['Boolean']>;
};

export type ContactEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  preferredContact?: InputMaybe<Scalars['Boolean']>;
};

export type ContestEntity = {
  __typename?: 'ContestEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  dueDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  multiSubmission?: Maybe<Scalars['Boolean']>;
  multiVote?: Maybe<Scalars['Boolean']>;
  offer?: Maybe<Scalars['Boolean']>;
  participation?: Maybe<Array<Maybe<ContestParticipationEntity>>>;
  seoDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  state?: Maybe<ContestStateEntity>;
  type?: Maybe<ContestTypeEntity>;
  votable?: Maybe<Scalars['Boolean']>;
};

export type ContestEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  dueDate?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  multiSubmission?: InputMaybe<Scalars['Boolean']>;
  multiVote?: InputMaybe<Scalars['Boolean']>;
  offer?: InputMaybe<Scalars['Boolean']>;
  participation?: InputMaybe<Array<InputMaybe<ContestParticipationEntityInput>>>;
  seoDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sponsored?: InputMaybe<Scalars['Boolean']>;
  state?: InputMaybe<ContestStateEntityInput>;
  type?: InputMaybe<ContestTypeEntityInput>;
  votable?: InputMaybe<Scalars['Boolean']>;
};

export type ContestParticipationEntity = {
  __typename?: 'ContestParticipationEntity';
  contest?: Maybe<ContestEntity>;
  contestVotes?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<Array<Maybe<MediaEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<ContestParticipationTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
  winner?: Maybe<Scalars['Boolean']>;
};

export type ContestParticipationEntityInput = {
  contest?: InputMaybe<ContestEntityInput>;
  contestVotes?: InputMaybe<Array<InputMaybe<ContestVoteEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<ContestParticipationTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
  winner?: InputMaybe<Scalars['Boolean']>;
};

export type ContestParticipationTranslatableEntity = {
  __typename?: 'ContestParticipationTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  textSubmission?: Maybe<Scalars['String']>;
};

export type ContestParticipationTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  textSubmission?: InputMaybe<Scalars['String']>;
};

export type ContestStateEntity = {
  __typename?: 'ContestStateEntity';
  contests?: Maybe<Array<Maybe<ContestEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type ContestStateEntityInput = {
  contests?: InputMaybe<Array<InputMaybe<ContestEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type ContestTypeEntity = {
  __typename?: 'ContestTypeEntity';
  contests?: Maybe<Array<Maybe<ContestEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<ContestTypeTranslatableEntity>>>;
};

export type ContestTypeEntityInput = {
  contests?: InputMaybe<Array<InputMaybe<ContestEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<ContestTypeTranslatableEntityInput>>>;
};

export type ContestTypeTranslatableEntity = {
  __typename?: 'ContestTypeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ContestTypeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ContestVoteEntity = {
  __typename?: 'ContestVoteEntity';
  contestParticipation?: Maybe<ContestParticipationEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  userContext?: Maybe<UserContextEntity>;
};

export type ContestVoteEntityInput = {
  contestParticipation?: InputMaybe<ContestParticipationEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type DealCategoryEntity = {
  __typename?: 'DealCategoryEntity';
  color?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  deals?: Maybe<Array<Maybe<DealEntity>>>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<DealCategoryTranslatableEntity>>>;
};

export type DealCategoryEntityInput = {
  color?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  deals?: InputMaybe<Array<InputMaybe<DealEntityInput>>>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<DealCategoryTranslatableEntityInput>>>;
};

export type DealCategoryTranslatableEntity = {
  __typename?: 'DealCategoryTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type DealCategoryTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DealEntity = {
  __typename?: 'DealEntity';
  address?: Maybe<AddressEntity>;
  cardImage?: Maybe<MediaEntity>;
  category?: Maybe<DealCategoryEntity>;
  contact?: Maybe<ContactEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  creator?: Maybe<UserContextEntity>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<Array<Maybe<MediaEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  offer?: Maybe<Scalars['Boolean']>;
  price: Scalars['Float'];
  seoDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  titleImage?: Maybe<MediaEntity>;
  visitors?: Maybe<Array<Maybe<DealVisitorEntity>>>;
};

export type DealEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  cardImage?: InputMaybe<MediaEntityInput>;
  category?: InputMaybe<DealCategoryEntityInput>;
  contact?: InputMaybe<ContactEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  creator?: InputMaybe<UserContextEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  offer?: InputMaybe<Scalars['Boolean']>;
  price: Scalars['Float'];
  seoDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sponsored?: InputMaybe<Scalars['Boolean']>;
  titleImage?: InputMaybe<MediaEntityInput>;
  visitors?: InputMaybe<Array<InputMaybe<DealVisitorEntityInput>>>;
};

export type DealVisitorEntity = {
  __typename?: 'DealVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<DealEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type DealVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type ErrorMessageEntity = {
  __typename?: 'ErrorMessageEntity';
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  message?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type ErrorMessageEntityInput = {
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  message?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type EventCategoryEntity = {
  __typename?: 'EventCategoryEntity';
  color?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<EventCategoryTranslatableEntity>>>;
};

export type EventCategoryEntityInput = {
  color?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<EventCategoryTranslatableEntityInput>>>;
};

export type EventCategoryTranslatableEntity = {
  __typename?: 'EventCategoryTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type EventCategoryTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EventCommentEntity = {
  __typename?: 'EventCommentEntity';
  approved?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<EventCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type EventCommentEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<EventCommentTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type EventCommentTranslatableEntity = {
  __typename?: 'EventCommentTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type EventCommentTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type EventEntity = {
  __typename?: 'EventEntity';
  address?: Maybe<AddressEntity>;
  attendeeConfiguration?: Maybe<AttendeeConfigurationEntity>;
  attendees?: Maybe<Array<Maybe<AttendeeEntity>>>;
  category?: Maybe<EventCategoryEntity>;
  contact?: Maybe<ContactEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  creator?: Maybe<UserContextEntity>;
  entryFee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<Array<Maybe<MediaEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisation?: Maybe<OrganisationEntity>;
  ratings?: Maybe<Array<Maybe<EventRatingEntity>>>;
  schedules?: Maybe<Array<Maybe<ScheduleEntity>>>;
  seoDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  targetGroups?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  titleImage?: Maybe<MediaEntity>;
  translatables?: Maybe<Array<Maybe<EventTranslatableEntity>>>;
  videoChatLink?: Maybe<Scalars['String']>;
  visitors?: Maybe<Array<Maybe<EventVisitorEntity>>>;
};

export type EventEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  attendeeConfiguration?: InputMaybe<AttendeeConfigurationEntityInput>;
  attendees?: InputMaybe<Array<InputMaybe<AttendeeEntityInput>>>;
  category?: InputMaybe<EventCategoryEntityInput>;
  contact?: InputMaybe<ContactEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  creator?: InputMaybe<UserContextEntityInput>;
  entryFee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  ratings?: InputMaybe<Array<InputMaybe<EventRatingEntityInput>>>;
  schedules?: InputMaybe<Array<InputMaybe<ScheduleEntityInput>>>;
  seoDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sponsored?: InputMaybe<Scalars['Boolean']>;
  targetGroups?: InputMaybe<Array<InputMaybe<EventTargetGroupEntityInput>>>;
  titleImage?: InputMaybe<MediaEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<EventTranslatableEntityInput>>>;
  videoChatLink?: InputMaybe<Scalars['String']>;
  visitors?: InputMaybe<Array<InputMaybe<EventVisitorEntityInput>>>;
};

export type EventRatingEntity = {
  __typename?: 'EventRatingEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  score?: Maybe<Scalars['Int']>;
  userContext?: Maybe<UserContextEntity>;
};

export type EventRatingEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  score?: InputMaybe<Scalars['Int']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type EventTargetGroupEntity = {
  __typename?: 'EventTargetGroupEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<EventTargetGroupTranslatableEntity>>>;
};

export type EventTargetGroupEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<EventTargetGroupTranslatableEntityInput>>>;
};

export type EventTargetGroupTranslatableEntity = {
  __typename?: 'EventTargetGroupTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type EventTargetGroupTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EventTranslatableEntity = {
  __typename?: 'EventTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<EventEntity>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type EventTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<EventEntityInput>;
  shortDescription?: InputMaybe<Scalars['String']>;
};

export type EventVisitorEntity = {
  __typename?: 'EventVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<EventEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type EventVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type FeatureEntity = {
  __typename?: 'FeatureEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  menuItem?: Maybe<Array<Maybe<MenuItemEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  pageFeatures?: Maybe<Array<Maybe<PageFeatureEntity>>>;
  translatables?: Maybe<Array<Maybe<FeatureTranslatableEntity>>>;
};

export type FeatureEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  menuItem?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  pageFeatures?: InputMaybe<Array<InputMaybe<PageFeatureEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<FeatureTranslatableEntityInput>>>;
};

export type FeatureTranslatableEntity = {
  __typename?: 'FeatureTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type FeatureTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterSortPaginateInput = {
  dir?: InputMaybe<Scalars['String']>;
  expression?: InputMaybe<QueryExpressionInput>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type FormTemplateTypeEntity = {
  __typename?: 'FormTemplateTypeEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<FormTemplateTypeTranslatableEntity>>>;
};

export type FormTemplateTypeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<FormTemplateTypeTranslatableEntityInput>>>;
};

export type FormTemplateTypeTranslatableEntity = {
  __typename?: 'FormTemplateTypeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<FormTemplateTypeEntity>;
};

export type FormTemplateTypeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<FormTemplateTypeEntityInput>;
};

export type FriendEntity = {
  __typename?: 'FriendEntity';
  accepted?: Maybe<Scalars['Boolean']>;
  addressee?: Maybe<UserContextEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  requester?: Maybe<UserContextEntity>;
};

export type FriendEntityInput = {
  accepted?: InputMaybe<Scalars['Boolean']>;
  addressee?: InputMaybe<UserContextEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  requester?: InputMaybe<UserContextEntityInput>;
};

export type InformationDto = {
  __typename?: 'InformationDto';
  version?: Maybe<Scalars['String']>;
};

export type LabelEntity = {
  __typename?: 'LabelEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  tagId?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<LabelTranslatablesEntity>>>;
};

export type LabelEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  tagId?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<LabelTranslatablesEntityInput>>>;
};

export type LabelTranslatablesEntity = {
  __typename?: 'LabelTranslatablesEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type LabelTranslatablesEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type LanguageEntity = {
  __typename?: 'LanguageEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type LanguageEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  base64?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type MediaEntityInput = {
  base64?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MemberEntity = {
  __typename?: 'MemberEntity';
  admin?: Maybe<Scalars['Boolean']>;
  approved?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisation?: Maybe<OrganisationEntity>;
  user?: Maybe<UserContextEntity>;
};

export type MemberEntityInput = {
  admin?: InputMaybe<Scalars['Boolean']>;
  approved?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  user?: InputMaybe<UserContextEntityInput>;
};

export type MenuItemEntity = {
  __typename?: 'MenuItemEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  feature?: Maybe<FeatureEntity>;
  header?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  order?: Maybe<Scalars['Int']>;
  page?: Maybe<PageEntity>;
  parent?: Maybe<MenuItemEntity>;
  subMenuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  translatables?: Maybe<Array<Maybe<MenuItemTranslatableEntity>>>;
};

export type MenuItemEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  feature?: InputMaybe<FeatureEntityInput>;
  header?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  order?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<PageEntityInput>;
  parent?: InputMaybe<MenuItemEntityInput>;
  subMenuItems?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<MenuItemTranslatableEntityInput>>>;
};

export type MenuItemTranslatableEntity = {
  __typename?: 'MenuItemTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type MenuItemTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MessageDefinitionEntity = {
  __typename?: 'MessageDefinitionEntity';
  channels?: Maybe<Array<Maybe<ChannelEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  template?: Maybe<MessageTemplateEntity>;
  translatables?: Maybe<Array<Maybe<MessageDefinitionTranslatableEntity>>>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type MessageDefinitionEntityInput = {
  channels?: InputMaybe<Array<InputMaybe<ChannelEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  template?: InputMaybe<MessageTemplateEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<MessageDefinitionTranslatableEntityInput>>>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type MessageDefinitionTranslatableEntity = {
  __typename?: 'MessageDefinitionTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<MessageDefinitionEntity>;
};

export type MessageDefinitionTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<MessageDefinitionEntityInput>;
};

export type MessageDto = {
  __typename?: 'MessageDto';
  content?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['Map_String_StringScalar']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<NotificationType>;
};

export type MessageDtoInput = {
  content?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['Map_String_StringScalar']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NotificationType>;
};

export type MessageTemplateEntity = {
  __typename?: 'MessageTemplateEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  definitions?: Maybe<Array<Maybe<MessageDefinitionEntity>>>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<MessageTemplateTranslatableEntity>>>;
};

export type MessageTemplateEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  definitions?: InputMaybe<Array<InputMaybe<MessageDefinitionEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<MessageTemplateTranslatableEntityInput>>>;
};

export type MessageTemplateTranslatableEntity = {
  __typename?: 'MessageTemplateTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<MessageTemplateEntity>;
};

export type MessageTemplateTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  parent?: InputMaybe<MessageTemplateEntityInput>;
};

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  addUploads?: Maybe<UserEntity>;
  changePassword?: Maybe<Scalars['Boolean']>;
  createToken?: Maybe<TokenDto>;
  deleteAddress?: Maybe<Scalars['Boolean']>;
  deleteAddresses?: Maybe<Scalars['Boolean']>;
  deleteAnswer?: Maybe<Scalars['Boolean']>;
  deleteAnswers?: Maybe<Scalars['Boolean']>;
  deleteApp?: Maybe<Scalars['Boolean']>;
  deleteApps?: Maybe<Scalars['Boolean']>;
  deleteArticle?: Maybe<Scalars['Boolean']>;
  deleteArticleCategories?: Maybe<Scalars['Boolean']>;
  deleteArticleCategory?: Maybe<Scalars['Boolean']>;
  deleteArticles?: Maybe<Scalars['Boolean']>;
  deleteAssignment?: Maybe<Scalars['Boolean']>;
  deleteAssignments?: Maybe<Scalars['Boolean']>;
  deleteAttendee?: Maybe<Scalars['Boolean']>;
  deleteAttendees?: Maybe<Scalars['Boolean']>;
  deleteContact?: Maybe<Scalars['Boolean']>;
  deleteContacts?: Maybe<Scalars['Boolean']>;
  deleteContest?: Maybe<Scalars['Boolean']>;
  deleteContestState?: Maybe<Scalars['Boolean']>;
  deleteContestStates?: Maybe<Scalars['Boolean']>;
  deleteContestType?: Maybe<Scalars['Boolean']>;
  deleteContestTypes?: Maybe<Scalars['Boolean']>;
  deleteContestVote?: Maybe<Scalars['Boolean']>;
  deleteContestVotes?: Maybe<Scalars['Boolean']>;
  deleteContests?: Maybe<Scalars['Boolean']>;
  deleteDeal?: Maybe<Scalars['Boolean']>;
  deleteDealCategories?: Maybe<Scalars['Boolean']>;
  deleteDealCategory?: Maybe<Scalars['Boolean']>;
  deleteDeals?: Maybe<Scalars['Boolean']>;
  deleteErrorMessage?: Maybe<Scalars['Boolean']>;
  deleteErrorMessages?: Maybe<Scalars['Boolean']>;
  deleteEvent?: Maybe<Scalars['Boolean']>;
  deleteEventCategories?: Maybe<Scalars['Boolean']>;
  deleteEventCategory?: Maybe<Scalars['Boolean']>;
  deleteEventComment?: Maybe<Scalars['Boolean']>;
  deleteEventComments?: Maybe<Scalars['Boolean']>;
  deleteEventRating?: Maybe<Scalars['Boolean']>;
  deleteEventRatings?: Maybe<Scalars['Boolean']>;
  deleteEventTargetGroup?: Maybe<Scalars['Boolean']>;
  deleteEventTargetGroups?: Maybe<Scalars['Boolean']>;
  deleteEvents?: Maybe<Scalars['Boolean']>;
  deleteLabel?: Maybe<Scalars['Boolean']>;
  deleteLabels?: Maybe<Scalars['Boolean']>;
  deleteLanguage?: Maybe<Scalars['Boolean']>;
  deleteLanguages?: Maybe<Scalars['Boolean']>;
  deleteMe?: Maybe<Scalars['Boolean']>;
  deleteMember?: Maybe<Scalars['Boolean']>;
  deleteMembers?: Maybe<Scalars['Boolean']>;
  deleteMenuItem?: Maybe<Scalars['Boolean']>;
  deleteMenuItems?: Maybe<Scalars['Boolean']>;
  deleteMessageDefinition?: Maybe<Scalars['Boolean']>;
  deleteMessageDefinitions?: Maybe<Scalars['Boolean']>;
  deleteMessageTemplate?: Maybe<Scalars['Boolean']>;
  deleteMessageTemplates?: Maybe<Scalars['Boolean']>;
  deleteNotification?: Maybe<Scalars['Boolean']>;
  deleteNotifications?: Maybe<Scalars['Boolean']>;
  deleteOrganisation?: Maybe<Scalars['Boolean']>;
  deleteOrganisationComment?: Maybe<Scalars['Boolean']>;
  deleteOrganisationComments?: Maybe<Scalars['Boolean']>;
  deleteOrganisationRating?: Maybe<Scalars['Boolean']>;
  deleteOrganisationRatings?: Maybe<Scalars['Boolean']>;
  deleteOrganisations?: Maybe<Scalars['Boolean']>;
  deletePage?: Maybe<Scalars['Boolean']>;
  deletePages?: Maybe<Scalars['Boolean']>;
  deletePublicAuthor?: Maybe<Scalars['Boolean']>;
  deletePublicAuthors?: Maybe<Scalars['Boolean']>;
  deleteQuestion?: Maybe<Scalars['Boolean']>;
  deleteQuestionOption?: Maybe<Scalars['Boolean']>;
  deleteQuestionOptions?: Maybe<Scalars['Boolean']>;
  deleteQuestionType?: Maybe<Scalars['Boolean']>;
  deleteQuestionTypes?: Maybe<Scalars['Boolean']>;
  deleteQuestions?: Maybe<Scalars['Boolean']>;
  deleteRole?: Maybe<Scalars['Boolean']>;
  deleteRoles?: Maybe<Scalars['Boolean']>;
  deleteSchedule?: Maybe<Scalars['Boolean']>;
  deleteSchedules?: Maybe<Scalars['Boolean']>;
  deleteSocialMedia?: Maybe<Scalars['Boolean']>;
  deleteSocialMedias?: Maybe<Scalars['Boolean']>;
  deleteSubscription?: Maybe<Scalars['Boolean']>;
  deleteSubscriptions?: Maybe<Scalars['Boolean']>;
  deleteSuburb?: Maybe<Scalars['Boolean']>;
  deleteSuburbs?: Maybe<Scalars['Boolean']>;
  deleteSurvey?: Maybe<Scalars['Boolean']>;
  deleteSurveyResult?: Maybe<Scalars['Boolean']>;
  deleteSurveyResults?: Maybe<Scalars['Boolean']>;
  deleteSurveyState?: Maybe<Scalars['Boolean']>;
  deleteSurveyStates?: Maybe<Scalars['Boolean']>;
  deleteSurveys?: Maybe<Scalars['Boolean']>;
  deleteUploads?: Maybe<UserEntity>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  deleteUserContext?: Maybe<Scalars['Boolean']>;
  deleteUserContexts?: Maybe<Scalars['Boolean']>;
  deleteUsers?: Maybe<Scalars['Boolean']>;
  refreshToken?: Maybe<TokenDto>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  saveAddress?: Maybe<AddressEntity>;
  saveAddresses?: Maybe<Array<Maybe<AddressEntity>>>;
  saveAnswer?: Maybe<AnswerEntity>;
  saveAnswers?: Maybe<Array<Maybe<AnswerEntity>>>;
  saveApp?: Maybe<AppEntity>;
  saveApps?: Maybe<Array<Maybe<AppEntity>>>;
  saveArticle?: Maybe<ArticleEntity>;
  saveArticleCategories?: Maybe<Array<Maybe<ArticleCategoryEntity>>>;
  saveArticleCategory?: Maybe<ArticleCategoryEntity>;
  saveArticles?: Maybe<Array<Maybe<ArticleEntity>>>;
  saveAssignment?: Maybe<AssignmentEntity>;
  saveAssignments?: Maybe<Array<Maybe<AssignmentEntity>>>;
  saveAttendee?: Maybe<AttendeeEntity>;
  saveAttendees?: Maybe<Array<Maybe<AttendeeEntity>>>;
  saveContact?: Maybe<ContactEntity>;
  saveContacts?: Maybe<Array<Maybe<ContactEntity>>>;
  saveContest?: Maybe<ContestEntity>;
  saveContestState?: Maybe<ContestStateEntity>;
  saveContestStates?: Maybe<Array<Maybe<ContestStateEntity>>>;
  saveContestType?: Maybe<ContestTypeEntity>;
  saveContestTypes?: Maybe<Array<Maybe<ContestTypeEntity>>>;
  saveContestVote?: Maybe<ContestVoteEntity>;
  saveContestVotes?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  saveContests?: Maybe<Array<Maybe<ContestEntity>>>;
  saveDeal?: Maybe<DealEntity>;
  saveDealCategories?: Maybe<Array<Maybe<DealCategoryEntity>>>;
  saveDealCategory?: Maybe<DealCategoryEntity>;
  saveDeals?: Maybe<Array<Maybe<DealEntity>>>;
  saveErrorMessage?: Maybe<ErrorMessageEntity>;
  saveErrorMessages?: Maybe<Array<Maybe<ErrorMessageEntity>>>;
  saveEvent?: Maybe<EventEntity>;
  saveEventCategories?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  saveEventCategory?: Maybe<EventCategoryEntity>;
  saveEventComment?: Maybe<EventCommentEntity>;
  saveEventComments?: Maybe<Array<Maybe<EventCommentEntity>>>;
  saveEventRating?: Maybe<EventRatingEntity>;
  saveEventRatings?: Maybe<Array<Maybe<EventRatingEntity>>>;
  saveEventTargetGroup?: Maybe<EventTargetGroupEntity>;
  saveEventTargetGroups?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  saveEvents?: Maybe<Array<Maybe<EventEntity>>>;
  saveLabel?: Maybe<LabelEntity>;
  saveLabels?: Maybe<Array<Maybe<LabelEntity>>>;
  saveLanguage?: Maybe<LanguageEntity>;
  saveLanguages?: Maybe<Array<Maybe<LanguageEntity>>>;
  saveMe?: Maybe<UserEntity>;
  saveMember?: Maybe<MemberEntity>;
  saveMembers?: Maybe<Array<Maybe<MemberEntity>>>;
  saveMenuItem?: Maybe<MenuItemEntity>;
  saveMenuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  saveMessageDefinition?: Maybe<MessageDefinitionEntity>;
  saveMessageDefinitions?: Maybe<Array<Maybe<MessageDefinitionEntity>>>;
  saveMessageTemplate?: Maybe<MessageTemplateEntity>;
  saveMessageTemplates?: Maybe<Array<Maybe<MessageTemplateEntity>>>;
  saveNotification?: Maybe<NotificationEntity>;
  saveNotifications?: Maybe<Array<Maybe<NotificationEntity>>>;
  saveOrganisation?: Maybe<OrganisationEntity>;
  saveOrganisationComment?: Maybe<OrganisationCommentEntity>;
  saveOrganisationComments?: Maybe<Array<Maybe<OrganisationCommentEntity>>>;
  saveOrganisationRating?: Maybe<OrganisationRatingEntity>;
  saveOrganisationRatings?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  saveOrganisations?: Maybe<Array<Maybe<OrganisationEntity>>>;
  savePage?: Maybe<PageEntity>;
  savePages?: Maybe<Array<Maybe<PageEntity>>>;
  savePublicAuthor?: Maybe<PublicAuthorEntity>;
  savePublicAuthors?: Maybe<Array<Maybe<PublicAuthorEntity>>>;
  saveQuestion?: Maybe<QuestionEntity>;
  saveQuestionOption?: Maybe<QuestionOptionEntity>;
  saveQuestionOptions?: Maybe<Array<Maybe<QuestionOptionEntity>>>;
  saveQuestionType?: Maybe<QuestionTypeEntity>;
  saveQuestionTypes?: Maybe<Array<Maybe<QuestionTypeEntity>>>;
  saveQuestions?: Maybe<Array<Maybe<QuestionEntity>>>;
  saveRole?: Maybe<RoleEntity>;
  saveRoles?: Maybe<Array<Maybe<RoleEntity>>>;
  saveSchedule?: Maybe<ScheduleEntity>;
  saveSchedules?: Maybe<Array<Maybe<ScheduleEntity>>>;
  saveSocialMedia?: Maybe<SocialMediaEntity>;
  saveSocialMedias?: Maybe<Array<Maybe<SocialMediaEntity>>>;
  saveSubscription?: Maybe<SubscriptionEntity>;
  saveSubscriptions?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  saveSuburb?: Maybe<SuburbEntity>;
  saveSuburbs?: Maybe<Array<Maybe<SuburbEntity>>>;
  saveSurvey?: Maybe<SurveyEntity>;
  saveSurveyResult?: Maybe<SurveyResultEntity>;
  saveSurveyResults?: Maybe<Array<Maybe<SurveyResultEntity>>>;
  saveSurveyState?: Maybe<SurveyStateEntity>;
  saveSurveyStates?: Maybe<Array<Maybe<SurveyStateEntity>>>;
  saveSurveys?: Maybe<Array<Maybe<SurveyEntity>>>;
  saveUser?: Maybe<UserEntity>;
  saveUserContext?: Maybe<UserContextEntity>;
  saveUserContexts?: Maybe<Array<Maybe<UserContextEntity>>>;
  saveUsers?: Maybe<Array<Maybe<UserEntity>>>;
  sendError?: Maybe<Scalars['Boolean']>;
  sendGlobalPush?: Maybe<Scalars['Boolean']>;
  sendPasswordReset?: Maybe<Scalars['Boolean']>;
  sendVerification?: Maybe<Scalars['Boolean']>;
  verify?: Maybe<UserEntity>;
};


/** Mutation root */
export type MutationAddUploadsArgs = {
  uploads?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
};


/** Mutation root */
export type MutationChangePasswordArgs = {
  newPassword?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationCreateTokenArgs = {
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAddressArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAddressesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAnswerArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAnswersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAppArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAppsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteArticleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteArticleCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteArticleCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteArticlesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAssignmentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAssignmentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAttendeeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAttendeesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteContactArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteContactsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteContestArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteContestStateArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteContestStatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteContestTypeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteContestTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteContestVoteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteContestVotesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteContestsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteDealArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteDealCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteDealCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteDealsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteErrorMessageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteErrorMessagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventCommentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventCommentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventRatingArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventRatingsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventTargetGroupArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventTargetGroupsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteLabelArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteLabelsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteLanguageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteLanguagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteMeArgs = {
  password?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMemberArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMembersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteMenuItemArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMenuItemsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteMessageDefinitionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMessageDefinitionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteMessageTemplateArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMessageTemplatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteNotificationArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteNotificationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteOrganisationCommentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteOrganisationCommentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationRatingArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteOrganisationRatingsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeletePageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeletePagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeletePublicAuthorArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeletePublicAuthorsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteQuestionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteQuestionOptionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteQuestionOptionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteQuestionTypeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteQuestionTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteQuestionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteRoleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteRolesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteScheduleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSchedulesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSocialMediaArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSocialMediasArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSubscriptionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSubscriptionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSuburbArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSuburbsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSurveyArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSurveyResultArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSurveyResultsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSurveyStateArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSurveyStatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSurveysArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteUploadsArgs = {
  uploadIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteUserContextArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteUserContextsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationResetPasswordArgs = {
  key?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
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
export type MutationSaveAnswerArgs = {
  entity?: InputMaybe<AnswerEntityInput>;
};


/** Mutation root */
export type MutationSaveAnswersArgs = {
  entities?: InputMaybe<Array<InputMaybe<AnswerEntityInput>>>;
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
export type MutationSaveArticlesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAssignmentArgs = {
  entity?: InputMaybe<AssignmentEntityInput>;
};


/** Mutation root */
export type MutationSaveAssignmentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<AssignmentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAttendeeArgs = {
  entity?: InputMaybe<AttendeeEntityInput>;
};


/** Mutation root */
export type MutationSaveAttendeesArgs = {
  entities?: InputMaybe<Array<InputMaybe<AttendeeEntityInput>>>;
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
export type MutationSaveContestStateArgs = {
  entity?: InputMaybe<ContestStateEntityInput>;
};


/** Mutation root */
export type MutationSaveContestStatesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContestStateEntityInput>>>;
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
export type MutationSaveEventRatingArgs = {
  entity?: InputMaybe<EventRatingEntityInput>;
};


/** Mutation root */
export type MutationSaveEventRatingsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventRatingEntityInput>>>;
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
  entity?: InputMaybe<UserEntityInput>;
};


/** Mutation root */
export type MutationSaveMemberArgs = {
  entity?: InputMaybe<MemberEntityInput>;
};


/** Mutation root */
export type MutationSaveMembersArgs = {
  entities?: InputMaybe<Array<InputMaybe<MemberEntityInput>>>;
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
export type MutationSavePagesArgs = {
  entities?: InputMaybe<Array<InputMaybe<PageEntityInput>>>;
};


/** Mutation root */
export type MutationSavePublicAuthorArgs = {
  entity?: InputMaybe<PublicAuthorEntityInput>;
};


/** Mutation root */
export type MutationSavePublicAuthorsArgs = {
  entities?: InputMaybe<Array<InputMaybe<PublicAuthorEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionArgs = {
  entity?: InputMaybe<QuestionEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionOptionArgs = {
  entity?: InputMaybe<QuestionOptionEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionOptionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<QuestionOptionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionTypeArgs = {
  entity?: InputMaybe<QuestionTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<QuestionTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<QuestionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};


/** Mutation root */
export type MutationSaveRolesArgs = {
  entities?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
};


/** Mutation root */
export type MutationSaveScheduleArgs = {
  entity?: InputMaybe<ScheduleEntityInput>;
};


/** Mutation root */
export type MutationSaveSchedulesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ScheduleEntityInput>>>;
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
export type MutationSaveUsersArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};


/** Mutation root */
export type MutationSendErrorArgs = {
  stackTrace?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSendGlobalPushArgs = {
  message?: InputMaybe<MessageDtoInput>;
};


/** Mutation root */
export type MutationSendPasswordResetArgs = {
  mailAddress?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSendVerificationArgs = {
  mailAddress?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationVerifyArgs = {
  key?: InputMaybe<Scalars['String']>;
};

export type NotificationEntity = {
  __typename?: 'NotificationEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  read?: Maybe<Scalars['Boolean']>;
  translatables?: Maybe<Array<Maybe<NotificationTranslatableEntity>>>;
  user?: Maybe<UserEntity>;
};

export type NotificationEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  read?: InputMaybe<Scalars['Boolean']>;
  translatables?: InputMaybe<Array<InputMaybe<NotificationTranslatableEntityInput>>>;
  user?: InputMaybe<UserEntityInput>;
};

export type NotificationTranslatableEntity = {
  __typename?: 'NotificationTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<NotificationEntity>;
  title?: Maybe<Scalars['String']>;
};

export type NotificationTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  parent?: InputMaybe<NotificationEntityInput>;
  title?: InputMaybe<Scalars['String']>;
};

export enum NotificationType {
  Chat = 'chat',
  DeletedUser = 'deletedUser',
  Evaluation = 'evaluation',
  Event = 'event',
  Global = 'global',
  JobAd = 'jobAd'
}

export type OrganisationCommentEntity = {
  __typename?: 'OrganisationCommentEntity';
  approved?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisation?: Maybe<OrganisationEntity>;
  translatables?: Maybe<Array<Maybe<OrganisationCommentTranslatableEntity>>>;
};

export type OrganisationCommentEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<OrganisationCommentTranslatableEntityInput>>>;
};

export type OrganisationCommentTranslatableEntity = {
  __typename?: 'OrganisationCommentTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<OrganisationCommentEntity>;
};

export type OrganisationCommentTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  parent?: InputMaybe<OrganisationCommentEntityInput>;
};

export type OrganisationEntity = {
  __typename?: 'OrganisationEntity';
  address?: Maybe<AddressEntity>;
  approved?: Maybe<Scalars['Boolean']>;
  cardImage?: Maybe<MediaEntity>;
  comments?: Maybe<Array<Maybe<OrganisationCommentEntity>>>;
  contact?: Maybe<ContactEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<Array<Maybe<MediaEntity>>>;
  members?: Maybe<Array<Maybe<MemberEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  ratings?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  seoDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titleImage?: Maybe<MediaEntity>;
  translatables?: Maybe<Array<Maybe<OrganisationTranslatableEntity>>>;
  visitors?: Maybe<Array<Maybe<OrganisationVisitorEntity>>>;
};

export type OrganisationEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  approved?: InputMaybe<Scalars['Boolean']>;
  cardImage?: InputMaybe<MediaEntityInput>;
  comments?: InputMaybe<Array<InputMaybe<OrganisationCommentEntityInput>>>;
  contact?: InputMaybe<ContactEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  members?: InputMaybe<Array<InputMaybe<MemberEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  ratings?: InputMaybe<Array<InputMaybe<OrganisationRatingEntityInput>>>;
  seoDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titleImage?: InputMaybe<MediaEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<OrganisationTranslatableEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<OrganisationVisitorEntityInput>>>;
};

export type OrganisationRatingEntity = {
  __typename?: 'OrganisationRatingEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisation?: Maybe<OrganisationEntity>;
  score?: Maybe<Scalars['Int']>;
  userContext?: Maybe<UserContextEntity>;
};

export type OrganisationRatingEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  score?: InputMaybe<Scalars['Int']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type OrganisationTranslatableEntity = {
  __typename?: 'OrganisationTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<OrganisationEntity>;
};

export type OrganisationTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  parent?: InputMaybe<OrganisationEntityInput>;
};

export type OrganisationVisitorEntity = {
  __typename?: 'OrganisationVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<OrganisationEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type OrganisationVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  callUrl?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  isLanding?: Maybe<Scalars['Boolean']>;
  media?: Maybe<Array<Maybe<MediaEntity>>>;
  menuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  pageFeatures?: Maybe<Array<Maybe<PageFeatureEntity>>>;
  seoDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titleImage?: Maybe<MediaEntity>;
  translatables?: Maybe<Array<Maybe<PageTranslatableEntity>>>;
  visitors?: Maybe<Array<Maybe<PageVisitorEntity>>>;
};

export type PageEntityInput = {
  callUrl?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isLanding?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  menuItems?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  pageFeatures?: InputMaybe<Array<InputMaybe<PageFeatureEntityInput>>>;
  seoDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titleImage?: InputMaybe<MediaEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<PageTranslatableEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<PageVisitorEntityInput>>>;
};

export type PageFeatureEntity = {
  __typename?: 'PageFeatureEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  feature?: Maybe<FeatureEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  order?: Maybe<Scalars['Int']>;
  page?: Maybe<PageEntity>;
};

export type PageFeatureEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  feature?: InputMaybe<FeatureEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  order?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<PageEntityInput>;
};

export type PageTranslatableEntity = {
  __typename?: 'PageTranslatableEntity';
  callText?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type PageTranslatableEntityInput = {
  callText?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
};

export type PageVisitorEntity = {
  __typename?: 'PageVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<PageEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type PageVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type PageableList_AddressEntity = {
  __typename?: 'PageableList_AddressEntity';
  result?: Maybe<Array<Maybe<AddressEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AnswerEntity = {
  __typename?: 'PageableList_AnswerEntity';
  result?: Maybe<Array<Maybe<AnswerEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AppEntity = {
  __typename?: 'PageableList_AppEntity';
  result?: Maybe<Array<Maybe<AppEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ArticleCategoryEntity = {
  __typename?: 'PageableList_ArticleCategoryEntity';
  result?: Maybe<Array<Maybe<ArticleCategoryEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ArticleEntity = {
  __typename?: 'PageableList_ArticleEntity';
  result?: Maybe<Array<Maybe<ArticleEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AssignmentEntity = {
  __typename?: 'PageableList_AssignmentEntity';
  result?: Maybe<Array<Maybe<AssignmentEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AttendeeEntity = {
  __typename?: 'PageableList_AttendeeEntity';
  result?: Maybe<Array<Maybe<AttendeeEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ContactEntity = {
  __typename?: 'PageableList_ContactEntity';
  result?: Maybe<Array<Maybe<ContactEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ContestEntity = {
  __typename?: 'PageableList_ContestEntity';
  result?: Maybe<Array<Maybe<ContestEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ContestStateEntity = {
  __typename?: 'PageableList_ContestStateEntity';
  result?: Maybe<Array<Maybe<ContestStateEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ContestTypeEntity = {
  __typename?: 'PageableList_ContestTypeEntity';
  result?: Maybe<Array<Maybe<ContestTypeEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ContestVoteEntity = {
  __typename?: 'PageableList_ContestVoteEntity';
  result?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_DealCategoryEntity = {
  __typename?: 'PageableList_DealCategoryEntity';
  result?: Maybe<Array<Maybe<DealCategoryEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_DealEntity = {
  __typename?: 'PageableList_DealEntity';
  result?: Maybe<Array<Maybe<DealEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ErrorMessageEntity = {
  __typename?: 'PageableList_ErrorMessageEntity';
  result?: Maybe<Array<Maybe<ErrorMessageEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventCategoryEntity = {
  __typename?: 'PageableList_EventCategoryEntity';
  result?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventCommentEntity = {
  __typename?: 'PageableList_EventCommentEntity';
  result?: Maybe<Array<Maybe<EventCommentEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventEntity = {
  __typename?: 'PageableList_EventEntity';
  result?: Maybe<Array<Maybe<EventEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventRatingEntity = {
  __typename?: 'PageableList_EventRatingEntity';
  result?: Maybe<Array<Maybe<EventRatingEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventTargetGroupEntity = {
  __typename?: 'PageableList_EventTargetGroupEntity';
  result?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_LabelEntity = {
  __typename?: 'PageableList_LabelEntity';
  result?: Maybe<Array<Maybe<LabelEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_LanguageEntity = {
  __typename?: 'PageableList_LanguageEntity';
  result?: Maybe<Array<Maybe<LanguageEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_MemberEntity = {
  __typename?: 'PageableList_MemberEntity';
  result?: Maybe<Array<Maybe<MemberEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_MenuItemEntity = {
  __typename?: 'PageableList_MenuItemEntity';
  result?: Maybe<Array<Maybe<MenuItemEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_MessageDefinitionEntity = {
  __typename?: 'PageableList_MessageDefinitionEntity';
  result?: Maybe<Array<Maybe<MessageDefinitionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_MessageTemplateEntity = {
  __typename?: 'PageableList_MessageTemplateEntity';
  result?: Maybe<Array<Maybe<MessageTemplateEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_NotificationEntity = {
  __typename?: 'PageableList_NotificationEntity';
  result?: Maybe<Array<Maybe<NotificationEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_OrganisationCommentEntity = {
  __typename?: 'PageableList_OrganisationCommentEntity';
  result?: Maybe<Array<Maybe<OrganisationCommentEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_OrganisationEntity = {
  __typename?: 'PageableList_OrganisationEntity';
  result?: Maybe<Array<Maybe<OrganisationEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_OrganisationRatingEntity = {
  __typename?: 'PageableList_OrganisationRatingEntity';
  result?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_PageEntity = {
  __typename?: 'PageableList_PageEntity';
  result?: Maybe<Array<Maybe<PageEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_PublicAuthorEntity = {
  __typename?: 'PageableList_PublicAuthorEntity';
  result?: Maybe<Array<Maybe<PublicAuthorEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_QuestionEntity = {
  __typename?: 'PageableList_QuestionEntity';
  result?: Maybe<Array<Maybe<QuestionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_QuestionOptionEntity = {
  __typename?: 'PageableList_QuestionOptionEntity';
  result?: Maybe<Array<Maybe<QuestionOptionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_QuestionTypeEntity = {
  __typename?: 'PageableList_QuestionTypeEntity';
  result?: Maybe<Array<Maybe<QuestionTypeEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_RoleEntity = {
  __typename?: 'PageableList_RoleEntity';
  result?: Maybe<Array<Maybe<RoleEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ScheduleEntity = {
  __typename?: 'PageableList_ScheduleEntity';
  result?: Maybe<Array<Maybe<ScheduleEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SocialMediaEntity = {
  __typename?: 'PageableList_SocialMediaEntity';
  result?: Maybe<Array<Maybe<SocialMediaEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SubscriptionEntity = {
  __typename?: 'PageableList_SubscriptionEntity';
  result?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SuburbEntity = {
  __typename?: 'PageableList_SuburbEntity';
  result?: Maybe<Array<Maybe<SuburbEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SurveyEntity = {
  __typename?: 'PageableList_SurveyEntity';
  result?: Maybe<Array<Maybe<SurveyEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SurveyResultEntity = {
  __typename?: 'PageableList_SurveyResultEntity';
  result?: Maybe<Array<Maybe<SurveyResultEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SurveyStateEntity = {
  __typename?: 'PageableList_SurveyStateEntity';
  result?: Maybe<Array<Maybe<SurveyStateEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_UserContextEntity = {
  __typename?: 'PageableList_UserContextEntity';
  result?: Maybe<Array<Maybe<UserContextEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_UserEntity = {
  __typename?: 'PageableList_UserEntity';
  result?: Maybe<Array<Maybe<UserEntity>>>;
  total: Scalars['Long'];
};

export type PasswordResetEntity = {
  __typename?: 'PasswordResetEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  user?: Maybe<UserEntity>;
};

export type PasswordResetEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  user?: InputMaybe<UserEntityInput>;
};

export type PublicAuthorEntity = {
  __typename?: 'PublicAuthorEntity';
  articles?: Maybe<Array<Maybe<ArticleEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type PublicAuthorEntityInput = {
  articles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  getAddress?: Maybe<AddressEntity>;
  getAddresses?: Maybe<PageableList_AddressEntity>;
  getAnswer?: Maybe<AnswerEntity>;
  getAnswers?: Maybe<PageableList_AnswerEntity>;
  getApp?: Maybe<AppEntity>;
  getApps?: Maybe<PageableList_AppEntity>;
  getArticle?: Maybe<ArticleEntity>;
  getArticleCategories?: Maybe<PageableList_ArticleCategoryEntity>;
  getArticleCategory?: Maybe<ArticleCategoryEntity>;
  getArticles?: Maybe<PageableList_ArticleEntity>;
  getAssignment?: Maybe<AssignmentEntity>;
  getAssignments?: Maybe<PageableList_AssignmentEntity>;
  getAttendee?: Maybe<AttendeeEntity>;
  getAttendees?: Maybe<PageableList_AttendeeEntity>;
  getContact?: Maybe<ContactEntity>;
  getContacts?: Maybe<PageableList_ContactEntity>;
  getContest?: Maybe<ContestEntity>;
  getContestState?: Maybe<ContestStateEntity>;
  getContestStates?: Maybe<PageableList_ContestStateEntity>;
  getContestType?: Maybe<ContestTypeEntity>;
  getContestTypes?: Maybe<PageableList_ContestTypeEntity>;
  getContestVote?: Maybe<ContestVoteEntity>;
  getContestVotes?: Maybe<PageableList_ContestVoteEntity>;
  getContests?: Maybe<PageableList_ContestEntity>;
  getDeal?: Maybe<DealEntity>;
  getDealCategories?: Maybe<PageableList_DealCategoryEntity>;
  getDealCategory?: Maybe<DealCategoryEntity>;
  getDeals?: Maybe<PageableList_DealEntity>;
  getErrorMessage?: Maybe<ErrorMessageEntity>;
  getErrorMessages?: Maybe<PageableList_ErrorMessageEntity>;
  getEvent?: Maybe<EventEntity>;
  getEventCategories?: Maybe<PageableList_EventCategoryEntity>;
  getEventCategory?: Maybe<EventCategoryEntity>;
  getEventComment?: Maybe<EventCommentEntity>;
  getEventComments?: Maybe<PageableList_EventCommentEntity>;
  getEventRating?: Maybe<EventRatingEntity>;
  getEventRatings?: Maybe<PageableList_EventRatingEntity>;
  getEventTargetGroup?: Maybe<EventTargetGroupEntity>;
  getEventTargetGroups?: Maybe<PageableList_EventTargetGroupEntity>;
  getEvents?: Maybe<PageableList_EventEntity>;
  getInformation?: Maybe<InformationDto>;
  getLabel?: Maybe<LabelEntity>;
  getLabels?: Maybe<PageableList_LabelEntity>;
  getLanguage?: Maybe<LanguageEntity>;
  getLanguages?: Maybe<PageableList_LanguageEntity>;
  getMember?: Maybe<MemberEntity>;
  getMembers?: Maybe<PageableList_MemberEntity>;
  getMenuItem?: Maybe<MenuItemEntity>;
  getMenuItems?: Maybe<PageableList_MenuItemEntity>;
  getMessageDefinition?: Maybe<MessageDefinitionEntity>;
  getMessageDefinitions?: Maybe<PageableList_MessageDefinitionEntity>;
  getMessageTemplate?: Maybe<MessageTemplateEntity>;
  getMessageTemplates?: Maybe<PageableList_MessageTemplateEntity>;
  getNotification?: Maybe<NotificationEntity>;
  getNotifications?: Maybe<PageableList_NotificationEntity>;
  getOrganisation?: Maybe<OrganisationEntity>;
  getOrganisationComment?: Maybe<OrganisationCommentEntity>;
  getOrganisationComments?: Maybe<PageableList_OrganisationCommentEntity>;
  getOrganisationRating?: Maybe<OrganisationRatingEntity>;
  getOrganisationRatings?: Maybe<PageableList_OrganisationRatingEntity>;
  getOrganisations?: Maybe<PageableList_OrganisationEntity>;
  getPage?: Maybe<PageEntity>;
  getPages?: Maybe<PageableList_PageEntity>;
  getPublicAuthor?: Maybe<PublicAuthorEntity>;
  getPublicAuthors?: Maybe<PageableList_PublicAuthorEntity>;
  getQuestion?: Maybe<QuestionEntity>;
  getQuestionOption?: Maybe<QuestionOptionEntity>;
  getQuestionOptions?: Maybe<PageableList_QuestionOptionEntity>;
  getQuestionType?: Maybe<QuestionTypeEntity>;
  getQuestionTypes?: Maybe<PageableList_QuestionTypeEntity>;
  getQuestions?: Maybe<PageableList_QuestionEntity>;
  getRole?: Maybe<RoleEntity>;
  getRoles?: Maybe<PageableList_RoleEntity>;
  getSchedule?: Maybe<ScheduleEntity>;
  getSchedules?: Maybe<PageableList_ScheduleEntity>;
  getSocialMedia?: Maybe<SocialMediaEntity>;
  getSocialMedias?: Maybe<PageableList_SocialMediaEntity>;
  getSubscription?: Maybe<SubscriptionEntity>;
  getSubscriptions?: Maybe<PageableList_SubscriptionEntity>;
  getSuburb?: Maybe<SuburbEntity>;
  getSuburbs?: Maybe<PageableList_SuburbEntity>;
  getSurvey?: Maybe<SurveyEntity>;
  getSurveyResult?: Maybe<SurveyResultEntity>;
  getSurveyResults?: Maybe<PageableList_SurveyResultEntity>;
  getSurveyState?: Maybe<SurveyStateEntity>;
  getSurveyStates?: Maybe<PageableList_SurveyStateEntity>;
  getSurveys?: Maybe<PageableList_SurveyEntity>;
  getUser?: Maybe<UserEntity>;
  getUserContext?: Maybe<UserContextEntity>;
  getUserContexts?: Maybe<PageableList_UserContextEntity>;
  getUsers?: Maybe<PageableList_UserEntity>;
  me?: Maybe<UserEntity>;
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
export type QueryGetAnswerArgs = {
  entity?: InputMaybe<AnswerEntityInput>;
};


/** Query root */
export type QueryGetAnswersArgs = {
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
export type QueryGetArticlesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAssignmentArgs = {
  entity?: InputMaybe<AssignmentEntityInput>;
};


/** Query root */
export type QueryGetAssignmentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAttendeeArgs = {
  entity?: InputMaybe<AttendeeEntityInput>;
};


/** Query root */
export type QueryGetAttendeesArgs = {
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
export type QueryGetContestArgs = {
  entity?: InputMaybe<ContestEntityInput>;
};


/** Query root */
export type QueryGetContestStateArgs = {
  entity?: InputMaybe<ContestStateEntityInput>;
};


/** Query root */
export type QueryGetContestStatesArgs = {
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
export type QueryGetEventRatingArgs = {
  entity?: InputMaybe<EventRatingEntityInput>;
};


/** Query root */
export type QueryGetEventRatingsArgs = {
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
export type QueryGetMemberArgs = {
  entity?: InputMaybe<MemberEntityInput>;
};


/** Query root */
export type QueryGetMembersArgs = {
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
export type QueryGetPagesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetPublicAuthorArgs = {
  entity?: InputMaybe<PublicAuthorEntityInput>;
};


/** Query root */
export type QueryGetPublicAuthorsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionArgs = {
  entity?: InputMaybe<QuestionEntityInput>;
};


/** Query root */
export type QueryGetQuestionOptionArgs = {
  entity?: InputMaybe<QuestionOptionEntityInput>;
};


/** Query root */
export type QueryGetQuestionOptionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionTypeArgs = {
  entity?: InputMaybe<QuestionTypeEntityInput>;
};


/** Query root */
export type QueryGetQuestionTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};


/** Query root */
export type QueryGetRolesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetScheduleArgs = {
  entity?: InputMaybe<ScheduleEntityInput>;
};


/** Query root */
export type QueryGetSchedulesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
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
export type QueryGetUsersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryConjunctionInput = {
  operands?: InputMaybe<Array<InputMaybe<QueryExpressionInput>>>;
  operator?: InputMaybe<ConjunctionOperator>;
};

export type QueryEntityInput = {
  operator?: InputMaybe<QueryOperator>;
  path?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
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

export type QuestionEntity = {
  __typename?: 'QuestionEntity';
  answers?: Maybe<Array<Maybe<AnswerEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  order?: Maybe<Scalars['Int']>;
  questionOptions?: Maybe<Array<Maybe<QuestionOptionEntity>>>;
  translatables?: Maybe<Array<Maybe<QuestionTranslatableEntity>>>;
  type?: Maybe<QuestionTypeEntity>;
};

export type QuestionEntityInput = {
  answers?: InputMaybe<Array<InputMaybe<AnswerEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  order?: InputMaybe<Scalars['Int']>;
  questionOptions?: InputMaybe<Array<InputMaybe<QuestionOptionEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<QuestionTranslatableEntityInput>>>;
  type?: InputMaybe<QuestionTypeEntityInput>;
};

export type QuestionOptionEntity = {
  __typename?: 'QuestionOptionEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  order?: Maybe<Scalars['Int']>;
  question?: Maybe<QuestionEntity>;
  translatables?: Maybe<Array<Maybe<QuestionOptionTranslatableEntity>>>;
};

export type QuestionOptionEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  order?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<QuestionEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<QuestionOptionTranslatableEntityInput>>>;
};

export type QuestionOptionTranslatableEntity = {
  __typename?: 'QuestionOptionTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<QuestionOptionEntity>;
};

export type QuestionOptionTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  parent?: InputMaybe<QuestionOptionEntityInput>;
};

export type QuestionTranslatableEntity = {
  __typename?: 'QuestionTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<QuestionEntity>;
  subject?: Maybe<Scalars['String']>;
};

export type QuestionTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  parent?: InputMaybe<QuestionEntityInput>;
  subject?: InputMaybe<Scalars['String']>;
};

export type QuestionTypeEntity = {
  __typename?: 'QuestionTypeEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  questions?: Maybe<Array<Maybe<QuestionEntity>>>;
};

export type QuestionTypeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  questions?: InputMaybe<Array<InputMaybe<QuestionEntityInput>>>;
};

export type RoleEntity = {
  __typename?: 'RoleEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<RoleTranslatableEntity>>>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type RoleEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<RoleTranslatableEntityInput>>>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type RoleTranslatableEntity = {
  __typename?: 'RoleTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<RoleEntity>;
};

export type RoleTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<RoleEntityInput>;
};

export type ScheduleEntity = {
  __typename?: 'ScheduleEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  endDate?: Maybe<Scalars['Date']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type ScheduleEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  endDate?: InputMaybe<Scalars['Date']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type SocialMediaEntity = {
  __typename?: 'SocialMediaEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SocialMediaEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Subscription root */
export type Subscription = {
  __typename?: 'Subscription';
  addChatListener?: Maybe<MessageDto>;
  addListener?: Maybe<MessageDto>;
};


/** Subscription root */
export type SubscriptionAddChatListenerArgs = {
  token?: InputMaybe<Scalars['String']>;
};


/** Subscription root */
export type SubscriptionAddListenerArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type SubscriptionEntity = {
  __typename?: 'SubscriptionEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  deviceToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  user?: Maybe<UserEntity>;
};

export type SubscriptionEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  deviceToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  user?: InputMaybe<UserEntityInput>;
};

export type SuburbEntity = {
  __typename?: 'SuburbEntity';
  addresses?: Maybe<Array<Maybe<AddressEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type SuburbEntityInput = {
  addresses?: InputMaybe<Array<InputMaybe<AddressEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SurveyEntity = {
  __typename?: 'SurveyEntity';
  assignments?: Maybe<Array<Maybe<AssignmentEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  due_date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  mandatory?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  seoDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  state?: Maybe<SurveyStateEntity>;
  surveyVisitors?: Maybe<Array<Maybe<SurveyVisitorEntity>>>;
  translatables?: Maybe<Array<Maybe<SurveyTranslatableEntity>>>;
};

export type SurveyEntityInput = {
  assignments?: InputMaybe<Array<InputMaybe<AssignmentEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  due_date?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  mandatory?: InputMaybe<Scalars['Boolean']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  seoDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sponsored?: InputMaybe<Scalars['Boolean']>;
  state?: InputMaybe<SurveyStateEntityInput>;
  surveyVisitors?: InputMaybe<Array<InputMaybe<SurveyVisitorEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyTranslatableEntityInput>>>;
};

export type SurveyResultEntity = {
  __typename?: 'SurveyResultEntity';
  answer?: Maybe<Array<Maybe<AnswerEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  survey?: Maybe<SurveyEntity>;
  translatables?: Maybe<Array<Maybe<SurveyResultTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type SurveyResultEntityInput = {
  answer?: InputMaybe<Array<InputMaybe<AnswerEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  survey?: InputMaybe<SurveyEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyResultTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type SurveyResultTranslatableEntity = {
  __typename?: 'SurveyResultTranslatableEntity';
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type SurveyResultTranslatableEntityInput = {
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type SurveyStateEntity = {
  __typename?: 'SurveyStateEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  survey?: Maybe<Array<Maybe<SurveyEntity>>>;
};

export type SurveyStateEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  survey?: InputMaybe<Array<InputMaybe<SurveyEntityInput>>>;
};

export type SurveyTranslatableEntity = {
  __typename?: 'SurveyTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<SurveyEntity>;
};

export type SurveyTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<SurveyEntityInput>;
};

export type SurveyVisitorEntity = {
  __typename?: 'SurveyVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<SurveyEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type SurveyVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type TokenDto = {
  __typename?: 'TokenDto';
  access?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['String']>;
};

export type UserContextEntity = {
  __typename?: 'UserContextEntity';
  address?: Maybe<AddressEntity>;
  articleRating?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  articles?: Maybe<Array<Maybe<ArticleEntity>>>;
  assignments?: Maybe<Array<Maybe<AssignmentEntity>>>;
  attendee?: Maybe<Array<Maybe<AttendeeEntity>>>;
  contacts?: Maybe<Array<Maybe<ContactEntity>>>;
  contestPariticpations?: Maybe<Array<Maybe<ContestParticipationEntity>>>;
  contestVotes?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  deals?: Maybe<Array<Maybe<DealEntity>>>;
  eventComment?: Maybe<Array<Maybe<EventCommentEntity>>>;
  eventRating?: Maybe<Array<Maybe<EventRatingEntity>>>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  favoriteEvents?: Maybe<Array<Maybe<EventEntity>>>;
  favoriteOffers?: Maybe<Array<Maybe<EventEntity>>>;
  favoriteOrganisations?: Maybe<Array<Maybe<OrganisationEntity>>>;
  friendAddressee?: Maybe<Array<Maybe<FriendEntity>>>;
  friendRequester?: Maybe<Array<Maybe<FriendEntity>>>;
  id?: Maybe<Scalars['String']>;
  member?: Maybe<Array<Maybe<MemberEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisationRating?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  profilePicture?: Maybe<MediaEntity>;
  surveyResults?: Maybe<Array<Maybe<SurveyResultEntity>>>;
  titleImage?: Maybe<MediaEntity>;
  translatables?: Maybe<Array<Maybe<UserContextTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<MediaEntity>>>;
  user?: Maybe<UserEntity>;
  userFormTemplate?: Maybe<Array<Maybe<UserFormTemplateEntity>>>;
};

export type UserContextEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  articleRating?: InputMaybe<Array<InputMaybe<ArticleRatingEntityInput>>>;
  articles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  assignments?: InputMaybe<Array<InputMaybe<AssignmentEntityInput>>>;
  attendee?: InputMaybe<Array<InputMaybe<AttendeeEntityInput>>>;
  contacts?: InputMaybe<Array<InputMaybe<ContactEntityInput>>>;
  contestPariticpations?: InputMaybe<Array<InputMaybe<ContestParticipationEntityInput>>>;
  contestVotes?: InputMaybe<Array<InputMaybe<ContestVoteEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  deals?: InputMaybe<Array<InputMaybe<DealEntityInput>>>;
  eventComment?: InputMaybe<Array<InputMaybe<EventCommentEntityInput>>>;
  eventRating?: InputMaybe<Array<InputMaybe<EventRatingEntityInput>>>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoriteEvents?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoriteOffers?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoriteOrganisations?: InputMaybe<Array<InputMaybe<OrganisationEntityInput>>>;
  friendAddressee?: InputMaybe<Array<InputMaybe<FriendEntityInput>>>;
  friendRequester?: InputMaybe<Array<InputMaybe<FriendEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<Array<InputMaybe<MemberEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisationRating?: InputMaybe<Array<InputMaybe<OrganisationRatingEntityInput>>>;
  profilePicture?: InputMaybe<MediaEntityInput>;
  surveyResults?: InputMaybe<Array<InputMaybe<SurveyResultEntityInput>>>;
  titleImage?: InputMaybe<MediaEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<UserContextTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  user?: InputMaybe<UserEntityInput>;
  userFormTemplate?: InputMaybe<Array<InputMaybe<UserFormTemplateEntityInput>>>;
};

export type UserContextTranslatableEntity = {
  __typename?: 'UserContextTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type UserContextTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  approved?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  notifications?: Maybe<Array<Maybe<NotificationEntity>>>;
  password?: Maybe<Scalars['String']>;
  passwordResets?: Maybe<Array<Maybe<PasswordResetEntity>>>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<RoleEntity>>>;
  subscriptions?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  userContext?: Maybe<UserContextEntity>;
  verifications?: Maybe<Array<Maybe<VerificationEntity>>>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  notifications?: InputMaybe<Array<InputMaybe<NotificationEntityInput>>>;
  password?: InputMaybe<Scalars['String']>;
  passwordResets?: InputMaybe<Array<InputMaybe<PasswordResetEntityInput>>>;
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
  subscriptions?: InputMaybe<Array<InputMaybe<SubscriptionEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
  verifications?: InputMaybe<Array<InputMaybe<VerificationEntityInput>>>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserFormTemplateEntity = {
  __typename?: 'UserFormTemplateEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<UserFormTemplateTranslatableEntity>>>;
  type?: Maybe<FormTemplateTypeEntity>;
  userContext?: Maybe<UserContextEntity>;
};

export type UserFormTemplateEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<UserFormTemplateTranslatableEntityInput>>>;
  type?: InputMaybe<FormTemplateTypeEntityInput>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type UserFormTemplateTranslatableEntity = {
  __typename?: 'UserFormTemplateTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type UserFormTemplateTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type VerificationEntity = {
  __typename?: 'VerificationEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  user?: Maybe<UserEntity>;
};

export type VerificationEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  user?: InputMaybe<UserEntityInput>;
};

export type VisitorEntity = {
  __typename?: 'VisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  ipAddress?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  userAgent?: Maybe<Scalars['String']>;
};

export type AddressFragment = { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude: number, longitude: number };

export type ContactFragment = { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null };

export type LabelFragment = { __typename?: 'LabelEntity', id?: string | null, tagId?: string | null, translatables?: Array<{ __typename?: 'LabelTranslatablesEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type LanguageFragment = { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null };

export type MediaFragment = { __typename?: 'MediaEntity', id?: string | null, mimeType?: string | null, name?: string | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', createToken?: { __typename?: 'TokenDto', access?: string | null, refresh?: string | null } | null };

export type RefreshMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'TokenDto', access?: string | null, refresh?: string | null } | null };

export type SaveLabelMutationVariables = Exact<{
  entity: LabelEntityInput;
}>;


export type SaveLabelMutation = { __typename?: 'Mutation', saveLabel?: { __typename?: 'LabelEntity', id?: string | null, tagId?: string | null, translatables?: Array<{ __typename?: 'LabelTranslatablesEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetLabelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLabelsQuery = { __typename?: 'Query', getLabels?: { __typename?: 'PageableList_LabelEntity', result?: Array<{ __typename?: 'LabelEntity', id?: string | null, tagId?: string | null, translatables?: Array<{ __typename?: 'LabelTranslatablesEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetServerVersionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServerVersionQuery = { __typename?: 'Query', getInformation?: { __typename?: 'InformationDto', version?: string | null } | null };

export type AppFragment = { __typename?: 'AppEntity', id?: string | null, url?: string | null, platform?: { __typename?: 'AppPlatformEntity', id?: string | null, key?: string | null, name?: string | null } | null };

export type MenuItemFragment = { __typename?: 'MenuItemEntity', id?: string | null, header?: boolean | null, order?: number | null, feature?: { __typename?: 'FeatureEntity', id?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null } | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, feature?: { __typename?: 'FeatureEntity', id?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null } | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null } | null> | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null };

export type SocialMediaFragment = { __typename?: 'SocialMediaEntity', icon?: string | null, name?: string | null, url?: string | null };

export type GetAppsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAppsQuery = { __typename?: 'Query', getApps?: { __typename?: 'PageableList_AppEntity', result?: Array<{ __typename?: 'AppEntity', id?: string | null, url?: string | null, platform?: { __typename?: 'AppPlatformEntity', id?: string | null, key?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuQuery = { __typename?: 'Query', getMenuItems?: { __typename?: 'PageableList_MenuItemEntity', result?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, header?: boolean | null, order?: number | null, feature?: { __typename?: 'FeatureEntity', id?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null } | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, feature?: { __typename?: 'FeatureEntity', id?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null } | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null } | null> | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null> | null } | null };

export type GetSocialMediaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSocialMediaQuery = { __typename?: 'Query', getSocialMedias?: { __typename?: 'PageableList_SocialMediaEntity', result?: Array<{ __typename?: 'SocialMediaEntity', icon?: string | null, name?: string | null, url?: string | null } | null> | null } | null };

export type EventFragment = { __typename?: 'EventEntity', id?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude: number, longitude: number } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null } | null };

export type GetEventDetailsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type GetEventDetailsQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', id?: string | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, color?: string | null, icon?: string | null } | null, address?: { __typename?: 'AddressEntity', id?: string | null } | null } | null };

export type OrganisationFragment = { __typename?: 'OrganisationEntity', id?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude: number, longitude: number } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null } | null };

export type GetOrganisationDetailsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type GetOrganisationDetailsQuery = { __typename?: 'Query', getOrganisation?: { __typename?: 'OrganisationEntity', id?: string | null, contact?: { __typename?: 'ContactEntity', id?: string | null } | null, address?: { __typename?: 'AddressEntity', id?: string | null } | null } | null };

export type PageFragment = { __typename?: 'PageEntity', id?: string | null, callUrl?: string | null, slug?: string | null, media?: Array<{ __typename?: 'MediaEntity', id?: string | null, mimeType?: string | null, name?: string | null } | null> | null, pageFeatures?: Array<{ __typename?: 'PageFeatureEntity', id?: string | null, order?: number | null, feature?: { __typename?: 'FeatureEntity', id?: string | null, key?: string | null } | null } | null> | null, titleImage?: { __typename?: 'MediaEntity', id?: string | null, mimeType?: string | null, name?: string | null } | null, translatables?: Array<{ __typename?: 'PageTranslatableEntity', id?: string | null, callText?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type GetEventsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetEventsQuery = { __typename?: 'Query', getEvents?: { __typename?: 'PageableList_EventEntity', result?: Array<{ __typename?: 'EventEntity', id?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude: number, longitude: number } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null } | null } | null> | null } | null };

export type GetPageQueryVariables = Exact<{
  isLanding?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetPageQuery = { __typename?: 'Query', getPage?: { __typename?: 'PageEntity', id?: string | null, callUrl?: string | null, slug?: string | null, media?: Array<{ __typename?: 'MediaEntity', id?: string | null, mimeType?: string | null, name?: string | null } | null> | null, pageFeatures?: Array<{ __typename?: 'PageFeatureEntity', id?: string | null, order?: number | null, feature?: { __typename?: 'FeatureEntity', id?: string | null, key?: string | null } | null } | null> | null, titleImage?: { __typename?: 'MediaEntity', id?: string | null, mimeType?: string | null, name?: string | null } | null, translatables?: Array<{ __typename?: 'PageTranslatableEntity', id?: string | null, callText?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const LabelFragmentDoc = gql`
    fragment Label on LabelEntity {
  id
  tagId
  translatables {
    id
    content
    language {
      id
      locale
      name
    }
  }
}
    `;
export const AppFragmentDoc = gql`
    fragment App on AppEntity {
  id
  url
  platform {
    id
    key
    name
  }
}
    `;
export const LanguageFragmentDoc = gql`
    fragment Language on LanguageEntity {
  id
  locale
  name
}
    `;
export const MenuItemFragmentDoc = gql`
    fragment MenuItem on MenuItemEntity {
  id
  header
  order
  feature {
    id
  }
  page {
    id
  }
  translatables {
    id
    name
    language {
      ...Language
    }
  }
  subMenuItems {
    id
    feature {
      id
    }
    page {
      id
    }
    subMenuItems {
      id
    }
    translatables {
      id
      name
      language {
        ...Language
      }
    }
  }
}
    ${LanguageFragmentDoc}`;
export const SocialMediaFragmentDoc = gql`
    fragment SocialMedia on SocialMediaEntity {
  icon
  name
  url
}
    `;
export const AddressFragmentDoc = gql`
    fragment Address on AddressEntity {
  id
  houseNumber
  place
  postalCode
  street
  latitude
  longitude
}
    `;
export const ContactFragmentDoc = gql`
    fragment Contact on ContactEntity {
  id
  email
  name
  phone
  preferredContact
}
    `;
export const EventFragmentDoc = gql`
    fragment Event on EventEntity {
  id
  address {
    ...Address
  }
  contact {
    ...Contact
  }
}
    ${AddressFragmentDoc}
${ContactFragmentDoc}`;
export const OrganisationFragmentDoc = gql`
    fragment Organisation on OrganisationEntity {
  id
  address {
    ...Address
  }
  contact {
    ...Contact
  }
}
    ${AddressFragmentDoc}
${ContactFragmentDoc}`;
export const MediaFragmentDoc = gql`
    fragment Media on MediaEntity {
  id
  mimeType
  name
}
    `;
export const PageFragmentDoc = gql`
    fragment Page on PageEntity {
  id
  callUrl
  media {
    ...Media
  }
  pageFeatures {
    id
    order
    feature {
      id
      key
    }
  }
  slug
  titleImage {
    ...Media
  }
  translatables {
    id
    callText
    content
    shortDescription
    name
    language {
      id
      locale
      name
    }
  }
}
    ${MediaFragmentDoc}`;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  createToken(username: $username, password: $password) {
    access
    refresh
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    override document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RefreshDocument = gql`
    mutation refresh($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    access
    refresh
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RefreshGQL extends Apollo.Mutation<RefreshMutation, RefreshMutationVariables> {
    override document = RefreshDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveLabelDocument = gql`
    mutation saveLabel($entity: LabelEntityInput!) {
  saveLabel(entity: $entity) {
    ...Label
  }
}
    ${LabelFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveLabelGQL extends Apollo.Mutation<SaveLabelMutation, SaveLabelMutationVariables> {
    override document = SaveLabelDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLabelsDocument = gql`
    query getLabels {
  getLabels {
    result {
      ...Label
    }
  }
}
    ${LabelFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLabelsGQL extends Apollo.Query<GetLabelsQuery, GetLabelsQueryVariables> {
    override document = GetLabelsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetServerVersionDocument = gql`
    query getServerVersion {
  getInformation {
    version
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetServerVersionGQL extends Apollo.Query<GetServerVersionQuery, GetServerVersionQueryVariables> {
    override document = GetServerVersionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAppsDocument = gql`
    query getApps {
  getApps {
    result {
      ...App
    }
  }
}
    ${AppFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAppsGQL extends Apollo.Query<GetAppsQuery, GetAppsQueryVariables> {
    override document = GetAppsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMenuDocument = gql`
    query getMenu {
  getMenuItems(
    params: {sort: "order", expression: {entity: {path: "parent", value: null}}}
  ) {
    result {
      ...MenuItem
    }
  }
}
    ${MenuItemFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMenuGQL extends Apollo.Query<GetMenuQuery, GetMenuQueryVariables> {
    override document = GetMenuDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSocialMediaDocument = gql`
    query getSocialMedia {
  getSocialMedias {
    result {
      ...SocialMedia
    }
  }
}
    ${SocialMediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSocialMediaGQL extends Apollo.Query<GetSocialMediaQuery, GetSocialMediaQueryVariables> {
    override document = GetSocialMediaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEventDetailsDocument = gql`
    query getEventDetails($id: String) {
  getEvent(entity: {id: $id}) {
    id
    category {
      id
      color
      icon
    }
    address {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventDetailsGQL extends Apollo.Query<GetEventDetailsQuery, GetEventDetailsQueryVariables> {
    override document = GetEventDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetOrganisationDetailsDocument = gql`
    query getOrganisationDetails($id: String) {
  getOrganisation(entity: {id: $id}) {
    id
    contact {
      id
    }
    address {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationDetailsGQL extends Apollo.Query<GetOrganisationDetailsQuery, GetOrganisationDetailsQueryVariables> {
    override document = GetOrganisationDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEventsDocument = gql`
    query getEvents($params: FilterSortPaginateInput) {
  getEvents(params: $params) {
    result {
      ...Event
    }
  }
}
    ${EventFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventsGQL extends Apollo.Query<GetEventsQuery, GetEventsQueryVariables> {
    override document = GetEventsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPageDocument = gql`
    query getPage($isLanding: Boolean, $slug: String) {
  getPage(entity: {isLanding: $isLanding, slug: $slug}) {
    ...Page
  }
}
    ${PageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPageGQL extends Apollo.Query<GetPageQuery, GetPageQueryVariables> {
    override document = GetPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }