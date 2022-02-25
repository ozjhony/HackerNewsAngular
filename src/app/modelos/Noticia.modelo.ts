export interface Noticia{
    created_at: Date;
    title: string;
    url: string;
    author: string;
    points: number;
    story_text?: any;
    comment_text?: any;
    num_comments: number;
    story_id?: any;
    story_title?: any;
    story_url?: any;
    parent_id?: any;
    created_at_i: number;
    relevancy_score: number;
    _tags: string[];
    objectID: string;
}
