import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/ArticlePageSlice';
import {
    getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;

        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl));
            }

            if (sortFromUrl) {
                dispatch(articlesPageActions.setSort(sortFromUrl));
            }

            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl));
            }

            if (typeFromUrl) {
                dispatch(articlesPageActions.setType(typeFromUrl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
