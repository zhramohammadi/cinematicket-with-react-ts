import './wallet.css';
import {useState} from "react";
import {Container, Button, Form, FormGroup, FormControl} from "react-bootstrap";
import { CgDanger } from "react-icons/cg";
import Dashboard from "../dashboard.tsx";
import { TbPointFilled } from "react-icons/tb";

function Wallet( ) {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleButtonClick = (value:number) => {
        setSelectedValue(value);
    };    return(
        <>
            <div className='d-lg-block  d-none left-sidebar'>
                <Dashboard/>
            </div>
            <div className='d-flex justify-content-start align-items-start  col-xl-9 col-lg-8 mx-lg-4'>
                <Container className=' wallet' >
                    <div className='text-end '>
                            <div>
                                <p>
                                    .برای برداشت وجه از کیف پول به حساب بانکی ابتدا باید <a className='text-primary text-decoration-none '> احراز هویت </a>کنید
                                    <CgDanger className='mx-2'/>
                                </p>
                            </div>
                            <div className='bg-white p-4 mt-4 box-item '>
                                <h6 className='text-muted'>برداشت از کیف پول</h6>
                                <p className='mt-3'>
                                    در صورتی که هنگام خرید با مشکل بانکی روبرو شوید یا پس از خرید بلیت خود را لغو کنید، مبلغ آن به کیف پول شما در سینماتیکت واریز می‌شود. از طریق دکمه زیر می‌توانید مبلغ موجود در کیف پول را به حساب بانکی خود انتقال دهید
                                </p>
                                <p>
                                    .شما می‌توانید هرزمان که خواستید با موجودی کیف ‌پول خود در سینماتیکت بلیت بخرید
                                    <TbPointFilled  className='mx-1'/>
                                </p>
                                <p>
                                    .می‌توانید با زدن روی دکمه زیر موجودی کیف‌ پول را به حساب بانکی خود انتقال دهید
                                    <TbPointFilled  className='mx-1'/>
                                </p>
                                <div className='d-inline-block justify-content-between wallet-inventory'>
                                    <span className='mx-2'>
                                        موجودی کیف شما
                                    </span>
                                    <span className='inventory mx-2 '>
                                         0 تومان
                                    </span>
                                </div>
                            </div>

                            <div className='bg-white p-4 mt-4 box-item mb-5'>
                                    <h6 className='text-muted'>افزایش موجودی کیف پول</h6>
                                    <p className='mt-3'>برای افزایش موجودی کیف پول مبلغ مورد نظر را انتخاب کنید</p>
                                <div className='d-lg-flex justify-content-between d-md-inline-block '>
                                    <div className={` d-inline ${selectedValue ? 'active-credit-increase' : 'credit-increase'}`}>
                                        <Button size={'sm'} variant='none' className=' border-0 mt-1'>
                                            افزایش اعتبار
                                        </Button>
                                    </div>
                                    <div className='d-lg-flex d-md-inline-block'>
                                            <div className='mt-lg-0 mt-md-0 mt-2'>
                                                <Form>
                                                    <FormGroup className='d-flex' >
                                                        <p className='mx-2 mt-2'>تومان</p>
                                                        <FormControl className=' text-end input-size w-100' placeholder='... مبلغ دلخواه شما' type='number'/>
                                                    </FormGroup>
                                                </Form>
                                            </div>
                                        <div className=' d-flex justify-content-around'>
                                            <span className='mx-2 mt-2'>یا</span>
                                            <div
                                                className={` inventory-increase ${selectedValue === 20000 ? 'active-inventory-increase' : ''}`}
                                                onClick={() => handleButtonClick(20000)}
                                            >
                                                <Button size={'sm'} variant='none' className='text-muted border-0 mt-1'>
                                                    تومان 20٬000
                                                </Button>
                                            </div>
                                            <div
                                                className={` inventory-increase ${selectedValue === 40000 ? 'active-inventory-increase' : ''}`}
                                                onClick={() => handleButtonClick(40000)}
                                            >
                                                <Button size={'sm'} variant='none' className='text-muted border-0 mt-1'>
                                                    تومان 40٬000
                                                </Button>
                                            </div>
                                            <div
                                                className={` inventory-increase ${selectedValue === 60000 ? 'active-inventory-increase' : ''}`}
                                                onClick={() => handleButtonClick(60000)}
                                            >
                                                <Button size={'sm'} variant='none' className='text-muted border-0 mt-1'>
                                                    تومان 60٬000
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div/>
                                </div>
                            </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Wallet;