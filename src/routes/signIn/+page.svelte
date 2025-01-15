<script lang="ts">
	import sakimoto from '../../image/bg-image.png';

	import { initializeApp } from 'firebase/app';
	import {
		getAuth,
		signInWithEmailAndPassword,
		signOut,
		type User,
		onAuthStateChanged,
		signInWithPopup,
		GoogleAuthProvider,
		GithubAuthProvider
	} from 'firebase/auth';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let email = '';
	let password = '';
	let user: User | null;
	let loginError = '';
	let isLoggedIn = writable(false);
	

	const firebaseConfig = {
		apiKey: 'AIzaSyBGOZIvnm7GbPUwpP12CEjYqs1BOg5G_E8',
		authDomain: 'mage-anime-figures-f91a3.firebaseapp.com',
		databaseURL: 'https://mage-anime-figures-f91a3-default-rtdb.firebaseio.com',
		projectId: 'mage-anime-figures-f91a3',
		storageBucket: 'mage-anime-figures-f91a3.firebasestorage.app',
		messagingSenderId: '771814892177',
		appId: '1:771814892177:web:3939a1b3c77ff89a9d1530',
		measurementId: 'G-MNCSECRB5W'
	};

	const app = initializeApp(firebaseConfig);

	const login = () => {
		const auth = getAuth(app);
		signInWithEmailAndPassword(auth, email, password).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
			isLoggedIn.set(true);
			loginError = 'Incorrect password or email';
		});
	};

	// const loginWithGoogle = () => {
	// 	const auth = getAuth(app);
	// 	signInWithPopup(auth, new GoogleAuthProvider());
	// };

	// const loginWithGithub = () => {
	// 	const auth = getAuth(app);
	// 	signInWithPopup(auth, new GithubAuthProvider());
	// };

	const logout = async () => {
		const auth = getAuth(app);
		signOut(auth);
	};

	onMount(async () => {
		const auth = getAuth(app);
		onAuthStateChanged(auth, (newUser) => {
			console.log(user);
			user = newUser;
		});
	});


</script>

<div class="relative flex min-h-screen items-center justify-center bg-slate-950">
	<div
		class="grid h-[500px] w-[1000px] -translate-y-44 grid-cols-2 rounded-md border-2 border-white opacity-70 hover:opacity-100 hover:shadow-2xl hover:shadow-white"
	>
		<form
			action=""
			class="relative w-full max-w-md rounded-lg bg-black bg-opacity-50 p-8 text-white shadow-md"
		>
			<div class="mb-6 text-center">
				<h1 class="mb-2 text-2xl font-bold">Welcome back</h1>
				<p class="text-gray-300">Log into your account for a personalized experience.</p>
			</div>

			<div class="mb-4">
				<label class="mb-2 block text-gray-300" for="email">Email Address</label>
				<input
					class="w-full rounded-lg border px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-orange"
					type="email"
					id="email"
					bind:value={email}
					placeholder="Email Address"
					required
					
				/>
			</div>

			<div class="mb-6">
				<label class="mb-2 block text-gray-300" for="password">Password</label>
				<input
					class="w-full rounded-lg border px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-orange"
					type="password"
					id="password"
					bind:value={password}
					placeholder="Password"
					required
					
				/>
			</div>

			<div class="mb-14 flex items-center justify-between">
				<button
					class="w-40 rounded-lg bg-orange px-4 py-2 text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-orange"
					onclick={login}
				>
					Login
				</button>
				{#if user}
					<button class="text-orange hover:underline focus:outline-none" onclick={logout}>
						logOut
					</button>
				{/if}
				<button class="text-orange hover:underline focus:outline-none"> Forgot Password? </button>
			</div>
			{#if loginError}
				<div class="mb-4 text-center text-red-500">{loginError}</div>
			{/if}
			<div class="text-center">
				<p class="text-gray-300">
					You don’t have an account?
					<a href="/signUp" class="text-orange hover:underline">Sign up</a>
				</p>
			</div>
		</form>
		<div class="bg-white bg-cover bg-center" style="background-image: url({sakimoto});"></div>
	</div>
</div>
