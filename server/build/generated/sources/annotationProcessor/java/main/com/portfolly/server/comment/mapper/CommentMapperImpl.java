package com.portfolly.server.comment.mapper;

import com.portfolly.server.comment.dto.CommentDto;
import com.portfolly.server.comment.entity.Comment;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-07-13T19:47:30+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.1.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

    @Override
    public Comment postToComment(CommentDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setContent( post.getContent() );

        return comment;
    }

    @Override
    public Comment patchToComment(CommentDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setId( patch.getId() );
        comment.setContent( patch.getContent() );

        return comment;
    }

    @Override
    public CommentDto.Response commentToResponse(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentDto.Response response = new CommentDto.Response();

        response.setId( comment.getId() );
        response.setContent( comment.getContent() );
        response.setStatus( comment.getStatus() );

        return response;
    }
}
