// import Image from 'next/image'

export default function InformSection() {
    return (
        <div className="relative w-full md:w-[calc(100%-80px)] md:mx-auto py-[100px] md:py-[140px] xl:py-0 h-auto xl:h-[948px] flex flex-col-reverse md:flex-row items-center justify-center">
            <div key='text-container' className="flex flex-col md:max-w-[60vw] w-[calc(100%-80px)] md:w-[50vw] xl:w-[600px]">
                <div key='main-heading' className="text-[6.2vw] xs:text-[28px] md:!text-[3.6vw] xl:!text-[40px] font-bold -tracking-[3px] leading-[1.3] text-[#212224]">국내 최대 규모 IT 창업 동아리<br />사단법인 멋쟁이사자처럼이<br />운영합니다.</div>
                <div key='content-container-1'>
                    <div key='sub-heading-1' className="font-semibold text-xl md:text-[28px] mt-10 leading-[1.4]">”내 아이디어를 내 손으로 실현하자!”</div>
                    <div key='description-1' className="xl:w-[600px] font-medium leading-[1.5] md:text-[1.6vw] xl:text-[20px] text-sm w-[100%] md:w-[50vw] mt-2">2013년, 서울대학교에서 이두희 대표를 필두로 시작된 ‘멋쟁이사자처럼 대학’. 현재는 국내외 121개 대학, 4천여 명이 활동하는 국내 최대 규모의 IT 창업 동아리로 자리매김하였습니다. “내 아이디어를 내 손으로 실현한다”는 모토로, 누구든지 자신이 원하는 IT 서비스를 구현할 수 있도록 각종 스터디와 네트워킹, 행사를 지원하고 있죠.</div>
                </div>
                <div key='content-container-2'>
                    <div key='sub-heading-2' className="font-semibold text-xl md:text-[28px] mt-10 leading-[1.4]">”Growl to World, 이제는 세계로”</div>
                    <div key='description-2' className="xl:w-[600px] font-medium leading-[1.5] md:text-[1.6vw] text-sm xl:text-[20px] w-[100%] md:w-[50vw] mt-2">2024년, 멋쟁이사자처럼 대학은 대한민국과 미국의 커뮤니티를 연결하여 “Growl to World”라는 비전을 실현하기 위해 전 세계로 뻗어 나갑니다. 글로벌 IT 창업 인재들이 함께 성장하는 커뮤니티로 발돋움할 멋쟁이사자처럼 대학의 미래를 함께 기대해주세요! 2013년, 뜨거운 마음에서 일어난 작은 불씨가 세상을 어떻게 변화시킬까요?</div>
                </div>
                
            </div>
            <div key='image-container' className='relative aspect-[4/3] mb-10 md:mb-0 w-[55vw] md:mt-[3%] md:ml-[1%] md:w-[38vw] xl:ml-[3%] xl:w-[580px] bg-red-500'>
                {/* <Image src="/CIdesign.png" alt='inform-section-image' fill={true} /> */}
            </div>
        </div>
    )
}

//                    src={`/history_${currentImage}.jpg`}
