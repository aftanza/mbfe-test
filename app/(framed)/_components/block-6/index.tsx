import { Title } from "@mantine/core";
import TableMates from "./_components/table-mates";
import "./styles.scss";
import { TableMatesProps } from "@/app/_globals/types";
import Image from "next/image";

const testimonies = {
    testi1: {
        name: "Bu Rizky",
        title: "Partner P3S",
        body: `“Sangat senang dan sangat bersemangat bekerja sama dengan mejabelajar karena banyak terbantu dalam menggiatkan belajar peserta didik. Peserta didik menjadi lebih serius dalam belajar dan dapat meningkatkan prestasi (ada yg lolos seleksi KSN ke provinsi). Harapan nya semoga OC mendapatkan apresiasi dari semua pihak dan juga terus didukung untuk membantu berkontribusi terhadap dunia pendidikan. Mudah2an banyak inovasi pembelajaran yang bisa di share juga kepada peserta didik. Agar lebih terbuka terhadap kemajuan dunia pendidikan. Kita berharap OC akan terus berkembang sayapnya dan memperbanyak merekrut org org yang berhati mulia lainnya untuk share ilmu dan mendukung kegiatan belajar.”`,
    },
    testi2: {
        name: "Sri Wulan Handayani",
        title: "Siswa Open Chat",
        body: `“Yang aku sukaaa dari mejabelajar itu tutornya, konten edukasi juga sukaa, cara penjelasan materinya juga seruu seruu, jadi gampang dipahami. Aku paling suka cara mereka menjelaskan materinya, cara ngejelasin nya itu seruu lohh ga bikinn bosen, jadi kalo zoom di waktu malem itu engga bikin ngantuk, pokonyaa sukaa banget cara penjelasan materinya”`,
        extra: "SMAN 2 Klari",
    },
    testi3: {
        name: "Firya Aqila Rosobin",
        title: "Mentor Open Chat",
        body: `“Ngajar di MB itu pengalaman yang seru banget!!! Menurut aku, lingkungan belajarnya lebih santai dan nyaman. Ditambah lagi, materi kelas juga sesuai request murid.”`,
    },
};

const Block6 = () => {
    return (
        <div className="block-6">
            <div className="block-6__left">
                <div className="block-6__left__title">
                    <div className="block-6__left__title__container">
                        <Title fw={700}>Sapa TableMates</Title>
                    </div>
                </div>
                <div className="block-6__left__tablemates">
                    <div className="block-6__left__tablemates__img-container">
                        <Image
                            src={"/homepage/block-6/target.svg"}
                            alt="Target decor"
                            width={400}
                            height={400}
                        />
                    </div>

                    <TableMates data={testimonies.testi1} />
                </div>
            </div>
            <div className="block-6__right">
                <TableMates data={testimonies.testi2} />
                <TableMates data={testimonies.testi3} />
            </div>
        </div>
    );
};

export default Block6;
