const Contact = () => {
    return (
        <section id='qualification' className='my-10 max-w-5xl mx-auto'>
            <h2 className='font-semibold text-2xl my-4 text-center '>
                Kontakta mig
            </h2>
            <p className='text-gray-500 text-sm text-center'>
                Jag ser fram emot att prata med er!
            </p>
            <a
                className='bg-purple py-2 px-6 mt-6 mb-10 flex gap-4 items-center w-fit rounded-lg mx-auto'
                href='mailto:cattis@hejdev.se'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='16'
                    viewBox='0 0 20 16'
                    fill='none'
                >
                    <path
                        d='M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.29973 4.19371 2.21192 4.11766 2.14189 4.02645C2.07186 3.93525 2.02106 3.83078 1.99258 3.71937C1.96409 3.60796 1.9585 3.49194 1.97616 3.37831C1.99381 3.26468 2.03434 3.15581 2.09528 3.0583C2.15623 2.96079 2.23632 2.87666 2.33073 2.811C2.42513 2.74533 2.53187 2.69951 2.6445 2.6763C2.75712 2.65309 2.87328 2.65297 2.98595 2.67595C3.09863 2.69893 3.20546 2.74453 3.3 2.81L10 7L16.7 2.81C16.7945 2.74453 16.9014 2.69893 17.014 2.67595C17.1267 2.65297 17.2429 2.65309 17.3555 2.6763C17.4681 2.69951 17.5749 2.74533 17.6693 2.811C17.7637 2.87666 17.8438 2.96079 17.9047 3.0583C17.9657 3.15581 18.0062 3.26468 18.0238 3.37831C18.0415 3.49194 18.0359 3.60796 18.0074 3.71937C17.9789 3.83078 17.9281 3.93525 17.8581 4.02645C17.7881 4.11766 17.7003 4.19371 17.6 4.25Z'
                        fill='white'
                    />
                </svg>
                <p className='text-white font-medium'>Säg hej!</p>
            </a>
            <section className="grid grid-cols-2 md:flex md:justify-between gap-y-10">
                <div className='flex flex-col justify-center items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        viewBox='0 0 40 40'
                        fill='none'
                    >
                        <path
                            d='M35.5556 19.9446C35.5556 15.6233 34.0459 11.9572 31.0267 8.94626C28.0089 5.93684 24.3333 4.43213 20 4.43213V0C22.7778 0 25.38 0.525946 27.8067 1.57784C30.2319 2.63121 32.343 4.05392 34.14 5.84598C35.9356 7.63657 37.3615 9.74183 38.4178 12.1618C39.4726 14.5802 40 17.1745 40 19.9446H35.5556ZM26.6667 19.9446C26.6667 18.0979 26.0185 16.5282 24.7222 15.2355C23.4259 13.9428 21.8519 13.2964 20 13.2964V8.86427C23.0741 8.86427 25.6948 9.94423 27.8622 12.1042C30.0282 14.2656 31.1111 16.879 31.1111 19.9446H26.6667ZM37.6667 40C32.8889 40 28.2319 38.9474 23.6956 36.8421C19.1578 34.7368 15.1393 31.9298 11.64 28.4211C8.13926 24.9123 5.32445 20.8953 3.19556 16.3701C1.06519 11.8464 0 7.20222 0 2.43767V1.27424C0 0.867959 0.0370369 0.480148 0.111111 0.110803H13.1111L15.1667 11.2465L8.83333 17.6177C10.3889 20.277 12.343 22.7701 14.6956 25.097C17.0467 27.4238 19.6296 29.4368 22.4444 31.1357L28.8889 24.7091L40 26.9252V39.8892C39.6296 39.9261 39.2407 39.9542 38.8333 39.9734C38.4259 39.9911 38.037 40 37.6667 40Z'
                            fill='#464646'
                        />
                    </svg>
                    <a className='text-sm mt-4' href='tel:+46707422363'>+46 70 742 23 63</a>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='51'
                        height='40'
                        viewBox='0 0 51 40'
                        fill='none'
                    >
                        <path
                            d='M45.7627 0H5.08475C2.28814 0 0.0254237 2.25 0.0254237 5L0 35C0 37.75 2.28814 40 5.08475 40H45.7627C48.5593 40 50.8475 37.75 50.8475 35V5C50.8475 2.25 48.5593 0 45.7627 0ZM44.7458 10.625L26.7712 21.675C25.9576 22.175 24.8898 22.175 24.0763 21.675L6.1017 10.625C5.84677 10.4843 5.62352 10.2942 5.44548 10.0661C5.26744 9.83812 5.13829 9.57694 5.06587 9.29843C4.99345 9.01991 4.97924 8.72984 5.02413 8.44577C5.06901 8.1617 5.17204 7.88953 5.32699 7.64575C5.48193 7.40197 5.68557 7.19164 5.92558 7.02749C6.16558 6.86334 6.43696 6.74878 6.72329 6.69075C7.00963 6.63271 7.30496 6.63242 7.59141 6.68987C7.87786 6.74732 8.14948 6.86133 8.38983 7.025L25.4237 17.5L42.4576 7.025C42.698 6.86133 42.9696 6.74732 43.2561 6.68987C43.5425 6.63242 43.8378 6.63271 44.1242 6.69075C44.4105 6.74878 44.6819 6.86334 44.9219 7.02749C45.1619 7.19164 45.3655 7.40197 45.5205 7.64575C45.6754 7.88953 45.7785 8.1617 45.8233 8.44577C45.8682 8.72984 45.854 9.01991 45.7816 9.29843C45.7092 9.57694 45.58 9.83812 45.402 10.0661C45.2239 10.2942 45.0007 10.4843 44.7458 10.625Z'
                            fill='#464646'
                        />
                    </svg>
                    <a className='text-sm mt-4' href='mailto:cattis@hejdev.se'>cattis@hejdev.se</a>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        viewBox='0 0 40 40'
                        fill='none'
                    >
                        <path
                            d='M35.5556 0C36.7343 0 37.8648 0.468252 38.6983 1.30175C39.5317 2.13524 40 3.2657 40 4.44444V35.5556C40 36.7343 39.5317 37.8648 38.6983 38.6983C37.8648 39.5317 36.7343 40 35.5556 40H4.44444C3.2657 40 2.13524 39.5317 1.30175 38.6983C0.468252 37.8648 0 36.7343 0 35.5556V4.44444C0 3.2657 0.468252 2.13524 1.30175 1.30175C2.13524 0.468252 3.2657 0 4.44444 0H35.5556ZM34.4444 34.4444V22.6667C34.4444 20.7453 33.6812 18.9027 32.3226 17.5441C30.964 16.1855 29.1213 15.4222 27.2 15.4222C25.3111 15.4222 23.1111 16.5778 22.0444 18.3111V15.8444H15.8444V34.4444H22.0444V23.4889C22.0444 21.7778 23.4222 20.3778 25.1333 20.3778C25.9585 20.3778 26.7498 20.7056 27.3332 21.289C27.9167 21.8724 28.2444 22.6638 28.2444 23.4889V34.4444H34.4444ZM8.62222 12.3556C9.61236 12.3556 10.562 11.9622 11.2621 11.2621C11.9622 10.562 12.3556 9.61236 12.3556 8.62222C12.3556 6.55556 10.6889 4.86667 8.62222 4.86667C7.62619 4.86667 6.67095 5.26234 5.96664 5.96664C5.26234 6.67095 4.86667 7.62619 4.86667 8.62222C4.86667 10.6889 6.55556 12.3556 8.62222 12.3556ZM11.7111 34.4444V15.8444H5.55556V34.4444H11.7111Z'
                            fill='#464646'
                        />
                    </svg>
                    <a className='text-sm mt-4'
                        href='https://www.linkedin.com/in/cattis-gustafsson/'
                        target='_blank'
                    >
                        Cattis Gustafsson
                    </a>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='42'
                        height='40'
                        viewBox='0 0 42 40'
                        fill='none'
                    >
                        <path
                            d='M20.9677 0C18.2142 0 15.4877 0.530159 12.9437 1.56021C10.3998 2.59025 8.08834 4.10002 6.14131 6.0033C2.2091 9.84714 0 15.0605 0 20.4965C0 29.556 6.01774 37.2422 14.3419 39.9683C15.3903 40.1322 15.7258 39.4968 15.7258 38.9434V35.4795C9.91774 36.7093 8.68065 32.733 8.68065 32.733C7.71613 30.3554 6.35323 29.72 6.35323 29.72C4.44516 28.4492 6.5 28.4902 6.5 28.4902C8.59678 28.6337 9.70807 30.6013 9.70807 30.6013C11.5323 33.7168 14.6145 32.7945 15.8097 32.3025C15.9984 30.9703 16.5435 30.0684 17.1306 29.556C12.4758 29.0436 7.59032 27.2809 7.59032 19.4717C7.59032 17.1966 8.3871 15.3724 9.75 13.9171C9.54032 13.4047 8.80645 11.2731 9.95968 8.50606C9.95968 8.50606 11.721 7.95266 15.7258 10.5967C17.3823 10.1458 19.1855 9.92033 20.9677 9.92033C22.75 9.92033 24.5532 10.1458 26.2097 10.5967C30.2145 7.95266 31.9758 8.50606 31.9758 8.50606C33.129 11.2731 32.3952 13.4047 32.1855 13.9171C33.5484 15.3724 34.3452 17.1966 34.3452 19.4717C34.3452 27.3014 29.4387 29.0231 24.7629 29.5355C25.5177 30.1709 26.2097 31.4212 26.2097 33.3274V38.9434C26.2097 39.4968 26.5452 40.1527 27.6145 39.9683C35.9387 37.2217 41.9355 29.556 41.9355 20.4965C41.9355 17.8049 41.3931 15.1396 40.3394 12.6529C39.2857 10.1661 37.7412 7.90658 35.7942 6.0033C33.8471 4.10002 31.5357 2.59025 28.9918 1.56021C26.4478 0.530159 23.7213 0 20.9677 0Z'
                            fill='#464646'
                        />
                    </svg>
                    <a className='text-sm mt-4' href='https://github.com/HejCattis' target='_blank'>
                        HejCattis
                    </a>
                </div>
            </section>
        </section>
    );
};
export default Contact;