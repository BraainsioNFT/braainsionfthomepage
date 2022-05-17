import { FC } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { GiRaiseZombie } from "react-icons/gi";

export const FooterSection: FC = () => {
  return (
    <footer className="p-10 flex justify-center bg-slate-900">
      <div className="w-[768px] flex justify-between">
        <div>
          <GiRaiseZombie size={100} />
          <p className='font-bold mt-1'>&copy; 2022 Braains.io NFT</p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="flex gap-5">
            <a>
              <FaTwitter size={40} />
            </a>
            <a>
              <FaDiscord size={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
