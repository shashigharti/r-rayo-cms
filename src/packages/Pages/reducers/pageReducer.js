const pageReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {
                name: action.page.name,
                slug: action.page.slug,
                content: action.page.content,
                category_id: action.page.category_id,
                excerpt: action.page.excerpt,
                meta_title: action.page.meta_title,
                meta_description: action.page.meta_description,
                meta_keywords: action.page.meta_keywords
            }
            ]
        case "EDIT":
            return state;
        case "DELETE":
            return state;
        default:
            return state;
    }
}

export {
    pageReducer
}