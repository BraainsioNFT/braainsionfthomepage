import { FC } from "react";

export const FAQSection: FC = () => {
  return (
    <section className="flex flex-col justify-center items-center p-20 text-center">
      <h1 className="text-6xl font-bold font-acme">
        Frequently Asked Questions
      </h1>
      <div>
        <div className="mt-5 w-full">
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-box  text-left"
          >
            <input type="checkbox" />
            <div className="collapse-title text-3xl font-medium">
              Lorem, ipsum dolor.
            </div>
            <div className="collapse-content">
              <p className="font-thin text-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                animi, dignissimos repellat itaque voluptatem est reiciendis
                odit ratione veniam numquam.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-box  text-left"
          >
            <input type="checkbox" />
            <div className="collapse-title text-3xl font-medium">
              Lorem, ipsum dolor.
            </div>
            <div className="collapse-content">
              <p className="font-thin text-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                animi, dignissimos repellat itaque voluptatem est reiciendis
                odit ratione veniam numquam.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-box  text-left"
          >
            <input type="checkbox" />
            <div className="collapse-title text-3xl font-medium">
              Lorem, ipsum dolor.
            </div>
            <div className="collapse-content">
              <p className="font-thin text-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                animi, dignissimos repellat itaque voluptatem est reiciendis
                odit ratione veniam numquam.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-box  text-left"
          >
            <input type="checkbox" />
            <div className="collapse-title text-3xl font-medium">
              Lorem, ipsum dolor.
            </div>
            <div className="collapse-content">
              <p className="font-thin text-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                animi, dignissimos repellat itaque voluptatem est reiciendis
                odit ratione veniam numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
