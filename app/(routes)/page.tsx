import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("b80c16ef-ca99-4d83-9644-eb60809eb49f");

    return (
        <Container>
            <div
                className="space-y-10 pb-10">
                    <Billboard data={billboard}/>
            </div>
        </Container>
    );
}

export default HomePage;