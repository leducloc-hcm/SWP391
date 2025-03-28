package com.swpproject.koi_care_system.service.Blog;

import com.swpproject.koi_care_system.dto.BlogDto;
import com.swpproject.koi_care_system.payload.request.BlogCreateRequest;
import com.swpproject.koi_care_system.payload.request.BlogUpdateRequest;

import java.io.IOException;
import java.util.List;

public interface IBlogService {
    BlogDto createBlog(BlogCreateRequest blogCreateRequest, String username) throws IOException;

    BlogDto updateBlog(int id, BlogUpdateRequest blogUpdateRequest);

    void deleteBlog(int id);

    List<BlogDto> getAllBlogs();

    BlogDto getBlogById(int id);

    //Get all Blogs by tagName
    List<BlogDto> getBlogByTag(int tagId);

    //Get all Blogs by username
    List<BlogDto> getBlogByUsername(long userId);

    //Search Blogs
    List<BlogDto> searchBlogs(String keyword);

}