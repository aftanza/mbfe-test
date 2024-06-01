import Header from "../_globals/header";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />

            <div className="">{children}</div>
            {/* <Footer /> */}
        </>
    );
}
