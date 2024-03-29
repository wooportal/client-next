/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AddressFragmentDoc } from '../../../../core/api/generated/address.fragment.generated';
import { CommentatorFragmentDoc } from '../../../../core/api/generated/commentator.fragment.generated';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
import { EventCategoryFragmentDoc } from './event-category.fragment.generated';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { EventCommentFragmentDoc } from './event-comment.fragment.generated';
import { EventOrganisationFragmentDoc } from './event-organisation.fragment.generated';
import { ScheduleFragmentDoc } from './event-schedule.fragment.generated';
export type EventDetailsFragment = { __typename?: 'EventEntity', id?: string | null, entryFee?: number | null, commentsAllowed?: boolean | null, hasSchedules?: boolean | null, slug?: string | null, modified?: any | null, videoChatLink?: string | null, name?: string | null, content?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, attendeeConfiguration?: { __typename?: 'EventAttendeeConfigurationEntity', id?: string | null, approval?: boolean | null, maxAttendees?: number | null, attendees?: Array<{ __typename?: 'EventAttendeeEntity', id?: string | null, approved?: boolean | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null } | null> | null } | null, ratingDistribution?: { __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'EventCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, lastEventComment?: { __typename?: 'EventCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'EventCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, slug?: string | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null } | null, ratings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null> | null, schedule?: { __typename?: 'EventScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null, translatables?: Array<{ __typename?: 'EventTranslatableEntity', id?: string | null, content?: string | null, name?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'EventMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null };

export const EventDetailsFragmentDoc = gql`
    fragment EventDetails on EventEntity {
  id
  entryFee
  commentsAllowed
  hasSchedules
  slug
  modified
  videoChatLink
  name
  address {
    ...Address
  }
  attendeeConfiguration {
    id
    approval
    maxAttendees
    attendees {
      id
      approved
      userContext {
        ...Commentator
      }
    }
  }
  ratingDistribution {
    ...AnalyticsDto
  }
  category {
    ...EventCategory
  }
  contact {
    ...Contact
  }
  lastEventComment {
    ...EventComment
  }
  organisation {
    ...EventOrganisation
  }
  ratings {
    id
    score
    userContext {
      id
    }
  }
  schedule(begin: $scheduleBegin, end: $scheduleEnd) {
    ...Schedule
  }
  translatables {
    id
    content
    name
    shortDescription
    language {
      ...Language
    }
  }
  uploads {
    title
    card
    media {
      ...Media
    }
  }
  content
}
    ${AddressFragmentDoc}
${CommentatorFragmentDoc}
${AnalyticsDtoFragmentDoc}
${EventCategoryFragmentDoc}
${ContactFragmentDoc}
${EventCommentFragmentDoc}
${EventOrganisationFragmentDoc}
${ScheduleFragmentDoc}
${LanguageFragmentDoc}
${MediaFragmentDoc}`;