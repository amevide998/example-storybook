import { userEvent, within, expect, screen } from '@storybook/test';
import Login from './Login.vue';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Example/Login',
  component: Login,
  tags: ['autodocs']
};

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const SuccessLogin = {
    args : {
        redirect: linkTo('Example/Core/Button', 'Primary'),
    },
    component: Login,
    play: async () => {
        const passwordInput = screen.getByLabelText('password')
        const emailInput = screen.getByLabelText('email')
        const submitBtn = screen.getByRole('button', {
            name: /Submit/i
        })
        await sleep(1000)
        await userEvent.type(emailInput, 'example.@mail.com', {
            delay: 200
        })
        await sleep(1000)
        await userEvent.type(passwordInput, 'example', {
            delay: 200
        })
        await sleep(1000)
        await userEvent.click(submitBtn)

        const loadingButton = screen.getByRole('button', { name: /Loading.../i });
        await expect(loadingButton).toBeInTheDocument()
  },
}

