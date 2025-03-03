import apiConfig from '@/config/config';
import { http, HttpResponse } from 'msw';
import { comminityData, posts } from '../../data';

export const postHandlers = [
    // 최신 포스트 목록 조회
    http.get(`${apiConfig.API_URL}/recent`, () => {

        const postList = posts.map((post) => {
            return {
                ...post,
                subject: '(최신글) ' + post.subject,
            }
        })

        return HttpResponse.json({
            data: postList,
            message: 'success',
            status: 200
        })
    }),

    // 인기 포스트 목록 조회
    http.get(`${apiConfig.API_URL}/trend`, () => {

        const postList = posts.map((post) => {
            return {
                ...post,
                subject: '(인기글) ' + post.subject,
            }
        })

        return HttpResponse.json({
            data: postList,
            message: 'success',
            status: 200
        })
    }),

    // 포스트 목록 조회
    http.get(`${apiConfig.API_URL}/posts`, () => {

        const postList = comminityData;

        return HttpResponse.json({
            data: postList,
            message: 'success',
            status: 200
        })
    }),
]