import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    TelegramIcon,
  } from 'react-share';
  
const Shareopt = () => {
    const currentPageUrl = window.location.href;
    const quote = "Check out my MOVIISH list";
  return (
    <div className='flex justify-center space-x-5 my-4'>
    <FacebookShareButton url={currentPageUrl} quote={quote}>
    <FacebookIcon size={32} round />
    </FacebookShareButton>

  <TwitterShareButton url={currentPageUrl} quote={quote}>
    <TwitterIcon size={32} round />
  </TwitterShareButton>

  <WhatsappShareButton url={currentPageUrl} quote={quote}>
    <WhatsappIcon size={32} round />
  </WhatsappShareButton>

  <TelegramShareButton url={currentPageUrl} quote={quote}>
    <TelegramIcon size={32} round />
  </TelegramShareButton>
    </div>
  )
}
export default Shareopt