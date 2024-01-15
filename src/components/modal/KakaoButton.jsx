import React from 'react';

const KakaoButton = ()=>
{
    const Rest_api_key='97b37b5bc03aa1e4b911652ec5cfe221' //REST API KEY
    const redirect_uri = 'http://3.36.88.85:8080/kakao/callback' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>
    <button onClick={handleLogin}>카카오 로그인</button>
    </>
    )
}

export default KakaoButton;