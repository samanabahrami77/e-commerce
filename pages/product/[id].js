import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ColorProducts } from "../../components/Tools/ColorProducts";

const Product = () => {
  const router = useRouter();
  const [data, setdata] = useState(null);
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .post("/api/productDetail", { id })
        .then((res) => setdata(res.data.product[0]));
    }
  }, [id]);

  return (
    <div className="mt-4">
      {data ? (
        <div className="flex flex-col px-8 gap-8">
          <div className="flex text-gray-500 text-sm gap-6">
            <Link href={"/"}>فروشگاه</Link>
            <span>/</span>
            <Link href={"#"}>{data.data_layer.category}</Link>{" "}
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-1/3 md:h-[50vh]">
              <span className="md:max-w-[24vw]">
                <Image
                  priority={data.id == id}
                  src={data.images.url[0]}
                  width="100%"
                  height="100%"
                  layout="responsive"
                />
              </span>
            </div>
            <div className="flex flex-col w-2/3 gap-4">
              <div className="flex text-blue-400 text-sm font-bold gap-2">
                <span>{data.data_layer.brand}</span>
                <span>/</span>
                <span>{data.data_layer.category}</span>
              </div>
              <span className="break-words">{data.title_fa}</span>
              <div className="flex">
                <div className="flex flex-col w-2/3">
                  <hr className="m-6" />
                  <div className="flex gap-1 text-sm items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-yellow-400 h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{(data.rating.rate * 5) / 100}</span>
                    <span className="mx-2 text-gray-600 text-xs">
                      ({data.rating.count} دیدگاه)
                    </span>
                  </div>
                  <div className="flex mt-4 items-center gap-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 stroke-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-500 text-sm">
                      {data.rating.rate}% از خریداران، این کالا را پیشنهاد کرده
                      اند
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 stroke-slate-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <ColorProducts colors={data.colors} />
                </div>
                <div className="flex flex-col w-1/3 my-2 bg-gray-100 border rounded">
                  amir
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default Product;
