import { pageConstants } from '../constants';

export function pages(state = {}, action) {
  switch (action.type) {
    case pageConstants.GETALL_REQUEST:
      return {
        loading: true,
        data: {},
        links: {},
        meta: {},
      };

    case pageConstants.GETALL_SUCCESS:
      return {
        data: action.pages.data,
        links: action.pages.links,
        meta: action.pages.meta,
        loading: false,
      };
    case pageConstants.EDIT_REQUEST:
      return {
        loading: true,
        page: {
          name: '',
          excerpt: '',
          category_id: '',
          thumbnail: '',
          slug: '',
          content: '',
          meta_title: '',
          meta_keywords: '',
          meta_description: '',
        },
      };
    case pageConstants.EDIT_SUCCESS:
      return {
        page: action.page.data,
      };
    case pageConstants.EDIT_SUCCESS:
      return {
        loading: false,
      };
    case pageConstants.DELETE_REQUEST:
      return {
        loading: true,
        data: {},
        meta: {},
        links: {},
      };
    case pageConstants.DELETE_SUCCESS:
      return {
        loading: false,
        data: {},
        meta: {},
        links: {},
      };
    case pageConstants.ADD_REQUEST:
      return {
        page: page,
      };
    case pageConstants.ADD_SUCCESS:
      return {
        page: page,
      };
    case pageConstants.ADD_FAILURE:
      return {
        page: page,
      };
    case pageConstants.DELETE_FAILURE:
      return {
        loading: false,
        data: {},
        meta: {},
        links: {},
      };
    default:
      return {
        loading: true,
        data: {},
        meta: {},
        links: {},
        page: {
          name: '',
          excerpt: '',
          category_id: '',
          thumbnail: '',
          slug: '',
          content: '',
          meta_title: '',
          meta_keywords: '',
          meta_description: '',
        },
      };
  }
}
