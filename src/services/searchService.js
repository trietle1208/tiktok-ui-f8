import * as request from '../utils/Request';

export const searchService = async (req) => {
    try {
        const res = await request.get('users/search', {
            params: {
                q: req.q,
                type: req.type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
