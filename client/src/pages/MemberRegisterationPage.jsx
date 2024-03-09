import FormComponent from "../components/FormComponent";
import side_image from '../Images/formone.jpg';

function MemberRegisterationPage() {
    return (
        <div>
            <div className='text-4xl text-center font-bold mb-12'>
            የቤተ ክርስቲያን አባልነት ቅጽ
            </div>
            <div className='flex'>
                <div className='w-1/2'>
                    <img src={side_image} className='w-full h-screen' alt="God holding child's hand"/>
                    </div>
            <div className='w-1/2'>
                <FormComponent />
            </div>
            </div>
            </div>
        // </div>
    );
}


export default MemberRegisterationPage;