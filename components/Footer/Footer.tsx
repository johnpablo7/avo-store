import Link from "next/link";
import { FaTwitterSquare, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex flex-col py-8 px-20">
      <div className="grid grid-cols-3 mb-12">
        <div className="flex flex-col">
          <h3 className="font-semibold mb-3">Nosotros</h3>
          <Link href="/">
            <p className="text-blue-400">Conoce más</p>
          </Link>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold mb-3">Servicios</h3>
          <Link href="/">
            <p className="text-blue-400">Todos los productos</p>
          </Link>
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Hecho por</h3>
            <Link href="/">
              <p className="text-blue-400">johnpablo7.com/</p>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              <FaTwitterSquare className="text-2xl md:text-3xl cursor-pointer" />
              <a
                className="text-blue-400"
                href="https://twitter.com/John_Pablo87"
              >
                Twitter
              </a>
            </div>
            <div className="flex items-center gap-1">
              <FaGithub className="text-2xl md:text-3xl cursor-pointer" />
              <a className="text-blue-400" href="https://github.com/johnpablo7">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2 text-gray-500 font-bold">
        <div>Copyright © 2023</div>
        <div>•</div>
        <div>John Pablo - Comencemos a codificar</div>
      </div>
    </div>
  );
};
