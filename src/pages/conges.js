import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}>
            <span>
                En cours de développement
            </span>
        </div>
    )
}
Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page