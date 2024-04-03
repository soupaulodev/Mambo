import { BsCalendar3, BsCalendarDate, BsListUl } from "react-icons/bs";
import { GoTable } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp, IoMdSearch } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export const SideBar = () => {
  return (
    <div
      id="docs-sidebar"
      className="flex flex-col transition-all duration-300 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
    >
      <div className="px-6">
        <a
          className="flex items-center text-xl font-semibold dark:text-zinc-50 leading-none"
          href="#"
          aria-label="Brand"
        >
          <div className="p-5 me-2.5 rounded-full bg-zinc-500"></div>
          Open Festas
        </a>
      </div>
      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
              href="#"
            >
              <MdOutlineAddBox className="size-5" />
              Adicionar produto
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
              href="#"
            >
              <GoTable className="size-5" />
              Dashboard
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
              href="#"
            >
              <IoMdSearch className="size-5" />
              Buscar
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
              href="#"
            >
              <BsListUl className="size-5" />
              Entrada
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
              href="#"
            >
              <BsCalendarDate className="size-5" />
              Hoje
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
              href="#"
            >
              <BsCalendar3 className="size-5" />
              Em breve
            </a>
          </li>

          <li className="hs-accordion" id="users-accordion">
            <button
              type="button"
              className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
            >
              <RxDashboard className="size-5" />
              Filtros e etiquetas
              <IoIosArrowDown className="hs-accordion-active:block ms-auto hidden size-4" />
              <IoIosArrowUp className="hs-accordion-active:hidden ms-auto block size-4" />
            </button>

            <div
              id="users-accordion"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            >
              <ul
                className="hs-accordion-group ps-3 pt-2 flex flex-col gap-2"
                data-hs-accordion-always-open
              >
                <li className="hs-accordion" id="users-accordion-sub-1">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
                  >
                    Sub Menu 1
                    <svg
                      className="hs-accordion-active:block ms-auto hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ms-auto block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id="users-accordion-sub-1"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                  >
                    <ul className="pt-2 ps-2 flex flex-col gap-2">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
                          href="#"
                        >
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
                          href="#"
                        >
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
                          href="#"
                        >
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hs-accordion" id="users-accordion-sub-1">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
                  >
                    Sub Menu 1
                    <svg
                      className="hs-accordion-active:block ms-auto hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ms-auto block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id="users-accordion-sub-1"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                  >
                    <ul className="pt-2 ps-2 flex flex-col gap-2">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
                          href="#"
                        >
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
                          href="#"
                        >
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-zinc-50 hover:bg-lime-300/20 focus:bg-lime-300/40 focus:outline-none dark:focus:text-lime-400 dark:hover:bg-lime-700/20 dark:focus:outline-none dark:focus:bg-lime-700/40 leading-none"
                          href="#"
                        >
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
