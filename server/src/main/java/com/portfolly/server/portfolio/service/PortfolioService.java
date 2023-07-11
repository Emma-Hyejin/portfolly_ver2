package com.portfolly.server.portfolio.service;

import com.portfolly.server.member.entity.Member;
import com.portfolly.server.portfolio.dto.PortfolioDto;
import com.portfolly.server.portfolio.entity.Portfolio;
import com.portfolly.server.portfolio.mapper.PortfolioMapper;
import com.portfolly.server.portfolio.repository.PortfolioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PortfolioService {
    private final PortfolioMapper portfolioMapper;
    private final PortfolioRepository portfolioRepository;

    //포트폴리오 등록
    public Portfolio postPortfolio(PortfolioDto.Post postDto, Long memberId){
        Member member = memberService.findVerifiedMember(memberId);
        Portfolio portfolio = portfolioMapper.postDtoToPortfolio(postDto);
        portfolio.setStatus(Portfolio.Status.ACTIVE);
        portfolio.setMember(member);
        portfolioRepository.save(portfolio);
        return portfolio;
    }

    //포트폴리오 수정
    public Portfolio updatePortfolio(PortfolioDto.Patch patchDto, Long memberId){
//        Member member = memberService.findVerifiedMember(memberId);
        Portfolio findedPortfolio = findVerifiedPortfolio(patchDto.getPortfolioId());
        findedPortfolio.setTitle(patchDto.getTitle());
        findedPortfolio.setContent(patchDto.getContent());
        findedPortfolio.setExplains(patchDto.getExplains());
        portfolioRepository.save(findedPortfolio);
        return findedPortfolio;
    }




    //포트폴리오 상세 조회, 조회수 증가
    public Portfolio selectPortfolio(Long portfolioId) {
        //runtimeException
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()->new RuntimeException());
        //조회수 증가
        increaseViews(portfolio);
        return portfolio;
    }

    public void increaseViews(Portfolio portfolio) {
        portfolio.setView(portfolio.getView() + 1);
        portfolioRepository.save(portfolio);
    }

    //포트폴리오 전체 조회
    public Page<Portfolio> findPortfolios(int page, int size, String category) {
        return portfolioRepository.findByPortfolioStatusAndCategory(
                PageRequest.of(page, size, Sort.by("portfolioId").descending()), category, Portfolio.Status.ACTIVE);
    }


    //포트폴리오 삭제
    public Portfolio deletePortfolio(Long portfolioId) {
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()->new RuntimeException());
        portfolio.setStatus(Portfolio.Status.DELETED);
        portfolioRepository.save(portfolio);
    }

    //회원이 존재하는지 확인


    //isLiked
    public boolean isLiked(Long portfolioId) {
        Portfolio portfolio = portfolioRepository.findById(portfolioId).orElseThrow(()-> new RuntimeException());
    }


    //isMarked


}
