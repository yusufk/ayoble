import { AdsList } from '../../constants/ads';

type Props = {
  setIsAyoba: (value: boolean) => void;
};

export const Footer = ({ setIsAyoba }: Props) => {
  const randomAd = AdsList[Math.floor(Math.random() * AdsList.length)];
  const ad = randomAd.text;
  const link = randomAd.url;

  return (
    <div className="footer">
      <div className="footer-content px-5 short:h-auto">
        <div className="flex">
          <p>
            <a href={link} target="_blank" rel="noopener noreferrer">{ad}</a>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};