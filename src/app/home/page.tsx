"use client"
import { url } from "inspector";
import Link from "next/link";
import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { HiMiniAcademicCap, HiLightBulb, HiChevronDown, HiChevronUp, HiChevronRight, HiMiniBookOpen } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { kegiatan, kitab, unggulan } from "../../data/list"
import "./style.css";
import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Home() {
    return (
        <div >
            {/* navbar */}
            <nav className="">
                <div className="navbar bg-green-400 px-[5em]">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <img alt="logo" src="https://baitussalam.sch.id/wp-content/uploads/2021/09/iconwebppmbaitussalam-300x83.png" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Item 1</a></li>
                            <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Daftar</a>
                    </div>
                </div>
            </nav>

            {/* slider */}
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="bg-zoom h-screen bg-no-repeat bg-cover bg-center transition duration-300 delay-300 ease-in-out" style={{ backgroundImage: "url('/asset/gedung.jpg')" }}>
                            <div className="bg-[#2b2a2a75] h-screen grid place-content-center ">
                                <div className="grid w-full text-center ">
                                    <h1 className="text-5xl text-white">PENERIMAAN SISWA BARU</h1>
                                    <p className="text-4xl text-white">PONDOK PESANTREN DAARUNNIDZHOM AL-JAIRY</p>
                                    <p className="text-4xl text-white">TAHUN AJARAN 2024/2025</p>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button className="me-3 bg-green-500 py-2 px-4 rounded-md text-white font-semibold shadow-md">
                                        Daftar
                                    </button>
                                    <button className="bg-green-700 py-2 px-4 rounded-md text-white font-semibold shadow-md">
                                        Hubungi kami
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-zoom h-screen bg-no-repeat bg-cover bg-center bg-" style={{ backgroundImage: "url('/asset/potbar.jpg')" }}>
                            <div className="bg-[#2b2a2a75] h-screen grid place-content-center ">
                                <div className="grid w-full text-center ">
                                    <h1 className="text-5xl text-white">PENERIMAAN SISWA BARU</h1>
                                    <p className="text-4xl text-white">PONDOK PESANTREN DAARUNNIDZHOM AL-JAIRY</p>
                                    <p className="text-4xl text-white">TAHUN AJARAN 2024/2025</p>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button className="me-3 bg-green-500 py-2 px-4 rounded-md text-white font-semibold shadow-md">
                                        Daftar
                                    </button>
                                    <button className="bg-green-700 py-2 px-4 rounded-md text-white font-semibold shadow-md">
                                        Hubungi kami
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* visi misi */}
            <div className=" mt-20">
                <div className="md:my-[5em] md:grid md:grid-cols-12" style={{ backgroundImage: "url('/asset/bg.jpg')" }}>
                    <div className="md:col-span-7 mt-36">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={3}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 20,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            className=""
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                        >
                            <SwiperSlide>
                                <div className="flex align-middle h-[20em]">
                                    <img className="object-cover" src="/asset/potbar.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex align-middle h-[20em]">
                                    <img className="object-cover" src="/asset/gedung.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex align-middle h-[20em]">
                                    <img className="object-cover" src="/asset/santri.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex align-middle h-[20em]">
                                    <img className="object-cover" src="/asset/ngaji.jpg" />
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className="md:col-span-5">
                        <h1 className="text-left text-2xl md:text-4xl mt-5 ">
                            VISI DAN MISI PONDOK PESANTREN DAARUNNIDZHOM AL-JAIRY
                        </h1>
                        <div className="mt-7">
                            <div>
                                <strong className="text-3xl bg-green-400 pr-6 py-5">VISI</strong>
                                <p className="text-xl bg-green-200 pb-7 pr-10">
                                    “Pondok Pesantren Modern Daarunnidzhom Aljairy
                                    Memiliki visi sebagai lembaga mencetak anak anak
                                    sholeh,kreatif,cakap,berakhlakul karimah”
                                </p>
                            </div>
                            <div className="mt-5">
                                <strong className="text-3xl pr-6 py-5">MISI</strong>
                                <p className="text-xl pb-7 pr-10 whitespace-pre-line md:text-justify">
                                    1. Mencetak pemipin umat(Ulama/Amilin)<br />
                                    2. Membentuk Generasi yang unggul <br />
                                    3. menuju terbentuknya khoirul ummah<br />
                                    4. Menciptakan Suasana Belajar Mengajar,Bekerja Dan Kondusif<br />
                                    5. Membantu Santri Mengenal Potensi yang ada di dalam dirinnya sehingga<br />
                                    Mampu dikembangkan secara optimal<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* kegiatan */}
            <div className="min-h-screen md:px-[5em] shadow-md md:grid md:grid-cols-2 w-full justify-items-center">
                <div>
                    <div className="mb-7">
                        <h1 className="text-4xl mb-4 font-semibold text-green-800">
                            Program Unggulan
                        </h1>
                        {unggulan.map((item: any) => (
                            <p key={item.id} className="flex items-center mb-2 text-2xl"><HiMiniAcademicCap className="me-3 text-green-400" /> {item.name}</p>
                        ))}

                    </div>
                    <div>
                        <h1 className="text-4xl mb-4 font-semibold text-green-800">
                            Ekstrakulikuler
                        </h1>
                        {kegiatan.map((item: any) => (
                            <p key={item.id} className="flex items-center mb-2 text-2xl"><HiLightBulb className="me-3 text-green-400" /> {item.name}</p>
                        ))}

                    </div>
                </div>
                <div className="w-full">
                    <h1 className="text-4xl mb-4 font-semibold text-green-800">
                        Kitab - Kitab
                    </h1>
                    <div className="w-full">
                        {
                            kitab.map((item: any) => (
                                <div className="mb-4">
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex items-center w-full justify-between rounded-lg bg-[#807c4994] px-4 py-2 text-left text-lg font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                    <span className="font-bold">{item.name}</span>
                                                    <HiChevronDown
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500 text-lg`}
                                                    />
                                                </Disclosure.Button>
                                                <Transition
                                                    as={Fragment}
                                                    show={open}
                                                    enter="transform transition duration-[400ms]"
                                                    enterFrom="-translate-x-10"
                                                    enterTo="translate-x-0"
                                                    leave="transform duration-200 transition ease-in-out"
                                                    leaveFrom="opacity-100 rotate-0 scale-100 "
                                                    leaveTo="opacity-0 scale-95 "
                                                >
                                                    <Disclosure.Panel className="text-lg px-4 pb-2 pt-4 text-black bg-[#e0d97494] rounded-md">
                                                        {
                                                            item.kitab.map((item: any) => (
                                                                <p className="flex items-center"><HiMiniBookOpen className="me-2" />{item} <br /></p>
                                                            ))
                                                        }

                                                    </Disclosure.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            {/* instagram */}

            {/* footer */}
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}