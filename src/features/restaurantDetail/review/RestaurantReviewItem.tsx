import styled from "styled-components"

const StyledItem = styled.li`
    position: relative;
    border-bottom: 1px solid #DBDBDB;
`;

const ReviewLink = styled.a`
    display: flex;
    flex-direction: row;
    padding: 20px 0 52px 0;

    :hover {
        background-color: #F3F3F3;
    }
`;

const ReviewText = styled.p`
    order: 2;
    font-size: 15px;
    line-height: 1.666;
    word-break: break-all;
    color: #000000;
    max-width: 650px;
`;

const User = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 70px;
    align-items: center;
    margin: 15px 35px 0 8px;

    span {
        margin-bottom: 2px;
        font-size: 13px;
        line-height: 1.3;
        text-align: center;
        word-break: break-all;
        color: #555555;
    }

    > img {
        width: 70px;
        height: 70px;
        border-radius: 50%;


        @media ${e => e.theme.device.mobile} {
            width: 30px;
            height: 30px;
        }
    }


    @media ${e => e.theme.device.mobile} {
        margin: 5px 10px 0 8px;
    }
`;

const UserStat = styled.ul`
    display: flex;
    justify-content: center;

    // user nickname
    li {
        display: flex;
        align-items: center;
        margin-right: 2px;
        font-size: 10px;
        color: #CBCBCB;

        &::before {
            content: '';
            margin: 0 2px 0 2px;
        }

        @media ${e => e.theme.device.mobile} {
            display: none;
        }   
    }


    .review {
        &::before {
            background-image: url(${e => e.theme.sprite.desktop});
            background-position: -996px -600px;
            width: 9px;
            height: 8px;
        }
    }

    .follower {
        &::before {
            background-image: url(${e => e.theme.sprite.desktop});
            background-position: -998px -729px;
            width: 8px;
            height: 8px;
        }
    }
`;

const Content = styled.div``;

const ImageList = styled.ul`
    display: flex;
    margin-top: 17px;
    gap: 10px;
    @media ${e => e.theme.device.mobile} {
        gap : 0px;
    }
`;

const ReviewDate = styled.span`
    order: 3;
    font-size: 14px;
    line-height: 1.2;
    color: #9B9B9B;
`;

const StyledImage = styled.li`
    button {
        position: relative;

        > div {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            font-size: 21px;
            color: #FFFFFF;
            background-color: rgba(0,0,0,0.6);
        }

        > img {
            width: 120px;
            height: 120px;
            object-fit: cover;

            @media ${e => e.theme.device.mobile} {
                width: 44px;
                height: 44px;
            }
        }
    }
`

function Image({
    src
}: {
    src: string
}) {
    return <StyledImage>
        <button >
            <img src={src} data-was-processed="true" />
        </button>
    </StyledImage>
}

const Badge = styled.div`
    display: flex;
    position: relative;
    margin-left: auto;
    flex-direction: column;
    align-items: center;

    font-size: 15px;
    color: #ff792a;

    &::before {
        content: '';
        margin: 0 8px 10px;
        background-image: url(${e => e.theme.sprite.desktop});
        background-position: -714px -866px;
        width: 44px;
        height: 44px;

        @media ${e => e.theme.device.mobile} {
            background-image: url(${e => e.theme.sprite.mobile});
            background-position: -102px -539px;
            width: 30px;
            height: 30px;
        }
    }

`;



export default function RestaurantReviewItem() {
    return (
        <StyledItem >
            <ReviewLink href="/reviews/MTA0MTA4NA==" target="_blank">
                <User>
                    <img src="/images/test/1.jpeg" />
                    <span>
                        단율
                    </span>
                    <UserStat>
                        <li className="review">800</li>
                        <li className="follower">293</li>
                    </UserStat>
                </User>
                <Content>
                    <ReviewText>
                        동순원_중식부문 맛집(5)<br />                        <br />최근방문_’23년 3월<br />                        <br />1. 천안에 간짜장먹으러 가는 진심 홀릭분들의 소식을 듣고 묘한 끌림을 느꼈다. 사실 평택/천안쪽에 은근히 가고 싶었던 곳들이 있었던 터라 1박2일의 일정으로 움직이기 시작했고, 그 여정의 첫 점심식사가 천안 성환읍쪽의 오랜 중식노포 “동순원”이다.<br /><br />2. “동순원”은 정말 조그마한 시간이 멈춘듯한 읍내에 위치했는데, 12시 전 도착했더니 자리는 절반이상 남아있었다. 줄을 선다는 이야기를 듣고 큰 걱정을 했는데, 내가 방문할 당시 사람들은 대부분 동네사람들이었고, 참 동네에서도 큰사랑 받는 곳임을 알 수 있었다.<br /><br />3. 두명이 방문한 덕에 거나하게 주문하진 못하고 내가 각자 먹고싶었던것과 극찬을 받은 탕수육을 주문했다.<br />&nbsp;&nbsp;- 간짜장면 (8,-) **<br />&nbsp;&nbsp;: 와.. 달랐다. 그냥 일반 짜장면이 아니다. 개인적으로 취향을 제대로 저격하는 맛이다. 우선 과하게 달거나 기름지지 않아서 전혀 부대낌이 없다. 그리고.. 익숙하지 않은 맛이 가장 중심에 있었는데, 매번 단맛에 가려져있던 춘장의 맛이 아닐까 싶었다. 이렇게 짜장이 다르다고 느낀건 신성각 이후 처음인것 같다.&nbsp;<br />&nbsp;&nbsp;: 유니짜장같이 정말 잘게 다 썰어서 나오다 보니 면을 다 먹고나서 면에 따라오지 못한 양념들이 있는데 정말 양념을 숟가락으로 퍼먹게되는 맛이다. 아삭한 재료들, 은은한 단맛에 간도 강하지 않고, 부대낌도 없으니 참 인생짜장면을 만났다. 인생짜장면이 천안이라니..<br />&nbsp;&nbsp;- 삼선짬뽕 (10,-) *<br />&nbsp;&nbsp;: 짬뽕도 참 맛있다. 야채에서 불향이 확 올라오는데, 정작 국물은 자극적이지 않고 부대낌없는 국물이다. 채소에서 나온국물인지 맛이 슴슴하지만 꽤 채워져있고, 매운맛이 살짝 받쳐준다. 해물이 국물맛을 바꾼것 같진 않고, 같이 먹을수 있어 참 좋았다.<br />&nbsp;&nbsp;- 탕수육 (18,-)<br />&nbsp;&nbsp;: 많이 고르지도 못할 요리는 모든사람과 모든리뷰의 추천을 받은 탕수육을 선택했다. 음.. 먼저 튀김은 정말 아무동네에서마 맛볼수 있는 탕수육의 튀김같은 느낌이지만, 갓튀겨나오니 무조건 맛 있을수 밖에 없었다. 문제는 소스인데, 꿔바러우 소스 같이 산미가 쿰쿰한향으로도 느껴질 정도였는데, 갓 튀긴줄 모르고 입에넣었다가 탕수육을 입안에서 식히는 과정에서 강한 신맛이 목으로 들어오는 바람에 기침을 한참이나 했다. 그래도 얇게 썬 야채들이 꽤 어울리긴 했지만, 전반적으로 그저 갓만들어 맛있는 탕수육이었다.<br /><br />4. 정말 너무나 맛있었다. 짜장과 짬뽕 둘다 맛이 딱 좋다. 특히 간짜장은 여태 먹은 것 중에 가장 맛있었다. 다만 걱정스러운점은, 앞선 리뷰들과 평이 지나치게 갈리는 부분이 있고, 그게 음식의 간이라는 점이다. 간짜장은 간이 너무 좋아서 숟가락으로 퍼먹을수 있을정도였고, 탕수육 소스는 절대 퍼먹을수 없을 정도였다. 다른건 몰라도, 간짜장맛은 내가 먹었을때와 같이 유지됐으면 좋겠다.<br /><br />* 결론<br />내가 맛본건 참 좋았으니, 대만족
                    </ReviewText>
                    <ReviewDate >2023-03-18</ReviewDate>
                    <ImageList>
                        <Image src="/images/test/1.jpeg" />
                        <Image src="/images/test/2.jpeg" />
                        <Image src="/images/test/3.jpeg" />
                        <Image src="/images/test/5.jpeg" />
                    </ImageList>
                </Content>
                <Badge>
                    <span>맛있다</span>
                </Badge>
            </ReviewLink>
        </StyledItem>

    )
}