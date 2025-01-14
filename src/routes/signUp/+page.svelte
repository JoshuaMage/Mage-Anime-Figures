<script>
	// import { auth, provider, signInWithPopup } from '$lib/firebaseConfig';
	import sakimoto from '../../image/signUpImage.gif';
	import Facebook from '../../svg/facebook.svelte';
	import Google from '../../svg/google.svelte';
	import Apple from '../../svg/apple.svelte';
	import { GoogleAuthProvider } from 'firebase/auth';

	let passwordVisible = false;
	let email = '';
	let emailError = '';

	function togglePasswordVisibility() {
		passwordVisible = !passwordVisible;
	}

	function validateEmail() {
		if (!email.includes('@')) {
			emailError = 'Email must contain an "@" symbol. ';
		} else {
			emailError = '';
		}
	}

	// async function signInWithGoogle() {
	// 	try {
	// 		const result = await signInWithPopup(auth,provider);
	// 		const credential = GoogleAuthProvider.credentialFromResult(result);
	// 		const token = credential?.accessToken;
	// 	} catch (error) {
	// 		console.error('Error signin in with Google', error);
			
	// 	}
	// }
</script>

<div class="relative flex min-h-screen items-center justify-center bg-slate-950">
	<div
		class="grid h-full w-[1000px] -translate-y-44 grid-cols-2 rounded-md border-2 border-white opacity-70 hover:opacity-100 hover:shadow-2xl hover:shadow-white"
	>
		<div class="bg-white bg-cover bg-center" style="background-image: url({sakimoto});"></div>
		<form
			action=""
			class="relative w-full max-w-5xl rounded-lg bg-black bg-opacity-50 p-10 text-white shadow-md"
		>
			<div class="mb-6 text-center">
				<h1 class="mb-2 text-4xl font-bold">Create Account</h1>

				<div class="mt-4 flex justify-center gap-5">
					<!-- <a href="#" onclick={signInWithGoogle}><Google /></a> -->
					<a href="/facebookSignUp"><Facebook /></a>
					<a href="/AppleSignUp"><Apple /></a>
				</div>
				<p class="mt-2 text-sm text-gray-300">or use Your <strong> Email Registration</strong></p>
			</div>

			<div class="mb-4">
				<label class="mb-2 block text-gray-300" for="email">Name</label>
				<input
					class="w-full rounded-lg border px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-orange"
					type="text"
					id="email"
					placeholder="Name"
					required
				/>
			</div>
			<div class="mb-4">
				<label class="mb-2 block text-gray-300" for="email">Email</label>
				<input
					class="w-full rounded-lg border px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-orange"
					type="email"
					id="email"
					placeholder="Email"
                    bind:value={email}
                    oninput={validateEmail}
					required
				/>
                {#if emailError} 
                <p class="text-red-500 mt-1">{emailError}</p>
                {/if}
			</div>

			<div class="mb-6">
				<label class="mb-2 block text-gray-300" for="password">Password</label>
				<div class="relative">
					<input
						class="w-full rounded-lg border px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-orange"
						type={passwordVisible ? 'text' : 'password'}
						id="password"
						placeholder="Password"
						required
					/>
					<buttob
						class="absolute inset-y-0 right-0 flex items-center pr-3"
						onclick={togglePasswordVisibility}
					>
						{#if passwordVisible}
							<!-- Eye Open Icon -->
							<svg
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z"
									stroke="#000000"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="2"></circle>
							</svg>
						{:else}
							<!-- Eye Closed Icon -->
							<svg
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2 2L22 22"
									stroke="#000000"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<path
									d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
									stroke="#000000"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<path
									d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
									stroke="#000000"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
						{/if}</buttob
					>
				</div>
			</div>

			<div class="flex justify-center">
				<a href="/"
					class="rounded-lg bg-orange px-10 py-2 text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-orange"
				>
					Sign Up
				</a>
			</div>
		</form>
	</div>
</div>
