/*
 * @copyright 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @copyright 2019-2020 Gary Kim <gary@garykim.dev>
 *
 * @author 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import Vue from 'vue'

import Dashboard from './components/Dashboard.vue'
import store from './store/store.js'

// Load recommendations
store.dispatch('fetchRecommendations', true)

document.addEventListener('DOMContentLoaded', function() {

	OCA.Dashboard.register('recommendations', (el) => {
		const View = Vue.extend(Dashboard)
		// eslint-disable-next-line no-unused-vars
		const vm = new View({
			propsData: {},
			store,
		}).$mount(el)
	})

})
