"use client"
import { url } from "inspector";
import Link from "next/link";
import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { HiMiniAcademicCap, HiLightBulb, HiChevronDown, HiChevronUp, HiChevronRight, HiMiniBookOpen } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { kegiatan, kitab, unggulan } from "../../data/list"
import "./style.css";
import { Disclosure, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function Home() {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }
    return (
        <div >
            {/* navbar */}
            <nav className="z-50 w-full">
                <div className="navbar bg-green-400 w-full">
                    <div className="navbar-start px-7 flex justify-between w-full">
                        <img alt="logo" src="/asset/logo.png" width={60} />
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-50">
                                <li><a>Visi</a></li>
                                <li><a>Program</a></li>
                                <li><a>Brosur</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className="font-semibold text-white"><a>Visi</a></li>
                            <li className="font-semibold text-white"><a>program</a></li>
                            <li className="font-semibold text-white"><a>Brosur</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* slider */}
            <div className="z-0">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="z-0"
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
                                        <a href="https://wa.link/yo3kjz">
                                            Daftar
                                        </a>
                                    </button>
                                    <button className="bg-green-700 py-2 px-4 rounded-md text-white font-semibold shadow-md">
                                        <a href="https://wa.link/yo3kjz">
                                            Hubungi kami
                                        </a>
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
            <div className="grid w-full text-center my-10">
                <h1 className="text-5xl text-green-800">Ikuti Kami Di Instagram</h1>
            </div>
            <div className="px-[2em] md:px-[5em] mt-5 flex justify-center">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    slidesPerView={1}
                    initialSlide={2}
                    spaceBetween={30}
                    navigation
                    pagination={{ clickable: true }}
                    centeredSlides={true}
                    roundLengths={true}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 4,
                            initialSlide: 1,
                            spaceBetween: 100
                        }
                    }
                    }
                >
                    <SwiperSlide >
                        <InstagramEmbed url="https://www.instagram.com/p/CznZydPJ8Tc/" width={328} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InstagramEmbed url="https://www.instagram.com/p/CzYmIpkpPL3/" width={328} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InstagramEmbed url="https://www.instagram.com/p/CvrIFfJJ7A1/" width={328} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InstagramEmbed url="https://www.instagram.com/p/C0DrasKJCxu/" width={328} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InstagramEmbed url="https://www.instagram.com/p/C13DgczP9Ga/" width={328} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InstagramEmbed url="https://www.instagram.com/p/CznaKzRJcwW/" width={328} />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* brosur pdf */}\
            <div className="w-full flex flex-col md:px-[5em] items-center justify-center mt-20">
                <img src="/asset/brosur2.PNG" className="float-left w-[60em] object-cover" alt="brosur1" />
                <img src="/asset/brosur.PNG" className="float-left w-[60em] object-cover" alt="brosur2" />
            </div>

            {/* footer */}
            <footer className="footer p-10 bg-black text-neutral-content">
                <aside>
                    <p>Pondok Pesantren Daarun Nidzom</p>
                </aside>
            </footer>
        </div>
    )
}