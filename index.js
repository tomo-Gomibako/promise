class MyPromise {
	constructor(f) {
		// this.cb = () => {}
		const resolve = (ret) => {
			this.cb(ret)
		}
		const reject = (ret) => {
			throw new Error(ret)
		}
		f(resolve, reject)
	}
	then(cb) {
		return new MyPromise((resolve, reject) => {
			this.cb = cb
		})
	}
}

function main() {
	wait(1000, "hoge").then(str => {
		console.log("1")
		return wait(1000, str)
	}).then(str => {
		console.log("2")
		console.log(str)
	})
}
main()

function wait(ms = 0, msg = "") {
	return new MyPromise((resolve, reject) => {
		console.log("hello")
		setTimeout(() => {
			resolve(msg)
		}, ms)
	})
}

// function wait(ms = 0, msg = "") {
// 	return new Promise((resolve, reject) => {
// 		console.log("hello")
// 		setTimeout(() => {
// 			resolve(msg)
// 		}, ms)
// 	})
// }

