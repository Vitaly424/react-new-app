import { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from '../..';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
