/*! For license information please see main.6b7f5fcd4f7a1717be7a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/classes/Page.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var s=i("./node_modules/gsap/index.js"),n=i("./node_modules/normalize-wheel/index.js"),a=i.n(n),l=i("./node_modules/prefix/index.js"),o=i.n(l),r=i("./node_modules/lodash/each.js"),h=i.n(r),m=i("./node_modules/lodash/map.js"),d=i.n(m),c=i("./app/animations/Paragraph.js"),u=i("./app/animations/Title.js");Object(function(){var e=new Error("Cannot find module 'animations/Label'");throw e.code="MODULE_NOT_FOUND",e}());class p{constructor({element:e,elements:t,id:i}){this.selector=e,this.selectorChildren={...t,animatioinsTitles:'[data-animation="title"]',animatioinsParagraphs:'[data-animation="paragraph"]',animatioinsLabels:'[data-animation="label"]'},this.id=i,this.transformPrefix=o()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},h()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations()}createAnimations(){this.animations=[],this.animatioinsTitles=d()(this.elements.animatioinsTitles,(e=>new u.default({element:e}))),this.animations.push(...this.animatioinsTitles),this.animatioinsParagraphs=d()(this.elements.animatioinsParagraphs,(e=>new c.default({element:e}))),this.animations.push(...this.animatioinsParagraphs),this.animatioinsLabels=d()(this.elements.animatioinsLabels,(e=>new Object(function(){var e=new Error("Cannot find module 'animations/Label'");throw e.code="MODULE_NOT_FOUND",e}())({element:e}))),this.animations.push(...this.animatioinsLabels)}show(){return new Promise((e=>{this.animationIn=s.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((()=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=s.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=a()(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),h()(this.animations,(e=>e.onResize()))}update(){this.scroll.target=s.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=s.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"79048d6606ebecf06536"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42YjdmNWZjZDRmN2ExNzE3YmU3YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a2hCQVdlLE1BQU1BLEVBQ25CQyxhQUFZLFFBQ1ZDLEVBRFUsU0FFVkMsRUFGVSxHQUdWQyxJQUVBQyxLQUFLQyxTQUFXSixFQUNoQkcsS0FBS0UsaUJBQW1CLElBQ25CSixFQUVISyxrQkFBbUIsMkJBQ25CQyxzQkFBdUIsK0JBQ3ZCQyxrQkFBbUIsNEJBR3JCTCxLQUFLRCxHQUFLQSxFQUNWQyxLQUFLTSxnQkFBa0JDLElBQU8sYUFFOUJQLEtBQUtRLGtCQUFvQlIsS0FBS1MsYUFBYUMsS0FBS1YsTUFHbERXLFNBQ0VYLEtBQUtILFFBQVVlLFNBQVNDLGNBQWNiLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLEdBRWhCRSxLQUFLYyxPQUFTLENBQ1pDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLEVBQ05DLE1BQU8sR0FHVEMsSUFBS25CLEtBQUtFLGtCQUFrQixDQUFDa0IsRUFBT0MsS0FDOUJELGFBQWlCRSxPQUFPQyxhQUFlSCxhQUFpQkUsT0FBT0UsVUFBWUMsTUFBTUMsUUFBUU4sR0FDM0ZwQixLQUFLRixTQUFTdUIsR0FBT0QsR0FFckJwQixLQUFLRixTQUFTdUIsR0FBT1QsU0FBU2UsaUJBQWlCUCxHQUViLElBQTlCcEIsS0FBS0YsU0FBU3VCLEdBQUtPLE9BQ3JCNUIsS0FBS0YsU0FBU3VCLEdBQU8sS0FDa0IsSUFBOUJyQixLQUFLRixTQUFTdUIsR0FBS08sU0FDNUI1QixLQUFLRixTQUFTdUIsR0FBT1QsU0FBU0MsY0FBY08sUUFLbERwQixLQUFLNkIsbUJBR1BBLG1CQUNFN0IsS0FBSzhCLFdBQWEsR0FHbEI5QixLQUFLRyxrQkFBb0I0QixJQUFJL0IsS0FBS0YsU0FBU0ssbUJBQW1CTixHQUNyRCxJQUFJbUMsRUFBQUEsUUFBTSxDQUNmbkMsY0FJSkcsS0FBSzhCLFdBQVdHLFFBQVFqQyxLQUFLRyxtQkFHN0JILEtBQUtJLHNCQUF3QjJCLElBQUkvQixLQUFLRixTQUFTTSx1QkFBdUJQLEdBQzdELElBQUlxQyxFQUFBQSxRQUFVLENBQ25CckMsY0FJSkcsS0FBSzhCLFdBQVdHLFFBQVFqQyxLQUFLSSx1QkFHN0JKLEtBQUtLLGtCQUFvQjBCLElBQUkvQixLQUFLRixTQUFTTyxtQkFBbUJSLEdBQ3JELElBQUlzQyxPQUFBQSxXQUFBQSxJQUFBQSxFQUFBQSxJQUFBQSxNQUFBQSx5Q0FBQUEsTUFBQUEsRUFBQUEsS0FBQUEsbUJBQUFBLEVBQUFBLEdBQUosQ0FBVSxDQUNmdEMsY0FJSkcsS0FBSzhCLFdBQVdHLFFBQVFqQyxLQUFLSyxtQkFJL0IrQixPQUNFLE9BQU8sSUFBSUMsU0FBUUMsSUFDakJ0QyxLQUFLdUMsWUFBY0MsRUFBQUEsUUFBQUEsV0FFbkJ4QyxLQUFLdUMsWUFBWUUsT0FBT3pDLEtBQUtILFFBQVMsQ0FDcEM2QyxVQUFXLEdBQ1YsQ0FDREEsVUFBVyxJQUdiMUMsS0FBS3VDLFlBQVlJLE1BQUssS0FDcEIzQyxLQUFLNEMsb0JBRUxOLFVBS05PLE9BQ0UsT0FBTyxJQUFJUixTQUFRQyxJQUNqQnRDLEtBQUs4Qyx1QkFFTDlDLEtBQUsrQyxhQUFlUCxFQUFBQSxRQUFBQSxXQUVwQnhDLEtBQUsrQyxhQUFhQyxHQUFHaEQsS0FBS0gsUUFBUyxDQUNqQzZDLFVBQVcsRUFDWE8sV0FBWVgsT0FLbEI3QixhQUFheUMsR0FDWCxNQUFNLE9BQUVDLEdBQVdDLElBQWVGLEdBRWxDbEQsS0FBS2MsT0FBT0UsUUFBVW1DLEVBR3hCRSxXQUNNckQsS0FBS0YsU0FBU3dELFVBQ2hCdEQsS0FBS2MsT0FBT0ksTUFBUWxCLEtBQUtGLFNBQVN3RCxRQUFRQyxhQUFlakMsT0FBT2tDLGFBR2xFckMsSUFBS25CLEtBQUs4QixZQUFZMkIsR0FBYUEsRUFBVUosYUFHL0NLLFNBQ0UxRCxLQUFLYyxPQUFPRSxPQUFTd0IsRUFBQUEsUUFBQUEsTUFBQUEsTUFBaUIsRUFBR3hDLEtBQUtjLE9BQU9JLE1BQU9sQixLQUFLYyxPQUFPRSxRQUV4RWhCLEtBQUtjLE9BQU9DLFFBQVV5QixFQUFBQSxRQUFBQSxNQUFBQSxZQUF1QnhDLEtBQUtjLE9BQU9DLFFBQVNmLEtBQUtjLE9BQU9FLE9BQVEsSUFFbEZoQixLQUFLYyxPQUFPQyxRQUFVLE1BQ3hCZixLQUFLYyxPQUFPQyxRQUFVLEdBR3BCZixLQUFLRixTQUFTd0QsVUFDaEJ0RCxLQUFLRixTQUFTd0QsUUFBUUssTUFBTTNELEtBQUtNLGlCQUFvQixlQUFjTixLQUFLYyxPQUFPQyxjQUluRjZCLG9CQUNFdEIsT0FBT3NDLGlCQUFpQixhQUFjNUQsS0FBS1EsbUJBRzdDc0MsdUJBQ0V4QixPQUFPc0MsaUJBQWlCLGFBQWM1RCxLQUFLUSxvQ0M1Si9DcUQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IG5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdhbmltYXRpb25zL1BhcmFncmFwaCdcbmltcG9ydCBUaXRsZSBmcm9tICdhbmltYXRpb25zL1RpdGxlJ1xuaW1wb3J0IExhYmVsIGZyb20gJ2FuaW1hdGlvbnMvTGFiZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZWxlbWVudCxcbiAgICBlbGVtZW50cyxcbiAgICBpZFxuICB9KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG4gICAgICAuLi5lbGVtZW50cyxcblxuICAgICAgYW5pbWF0aW9pbnNUaXRsZXM6ICdbZGF0YS1hbmltYXRpb249XCJ0aXRsZVwiXScsXG4gICAgICBhbmltYXRpb2luc1BhcmFncmFwaHM6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhZ3JhcGhcIl0nLFxuICAgICAgYW5pbWF0aW9pbnNMYWJlbHM6ICdbZGF0YS1hbmltYXRpb249XCJsYWJlbFwiXScsXG4gICAgfVxuXG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cbiAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKVxuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpXG4gIH1cblxuICBjcmVhdGVBbmltYXRpb25zKCkge1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdXG5cbiAgICAvLyBUaXRsZXMuXG4gICAgdGhpcy5hbmltYXRpb2luc1RpdGxlcyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvaW5zVGl0bGVzLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgVGl0bGUoe1xuICAgICAgICBlbGVtZW50XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvaW5zVGl0bGVzKVxuXG4gICAgLy8gUGFyYWdyYXBocy5cbiAgICB0aGlzLmFuaW1hdGlvaW5zUGFyYWdyYXBocyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvaW5zUGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFBhcmFncmFwaCh7XG4gICAgICAgIGVsZW1lbnRcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9pbnNQYXJhZ3JhcGhzKVxuXG4gICAgLy8gTGFiZWxzLlxuICAgIHRoaXMuYW5pbWF0aW9pbnNMYWJlbHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb2luc0xhYmVscywgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IExhYmVsKHtcbiAgICAgICAgZWxlbWVudFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb2luc0xhYmVscylcblxuICB9XG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICB9LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKClcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25Nb3VzZVdoZWVsKGV2ZW50KSB7XG4gICAgY29uc3QgeyBwaXhlbFkgfSA9IG5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLmFuaW1hdGlvbnMsIGFuaW1hdGlvbiA9PiBhbmltYXRpb24ub25SZXNpemUoKSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIDAuMSlcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4wMSkge1xuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IDBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3OTA0OGQ2NjA2ZWJlY2YwNjUzNlwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJhbmltYXRpb2luc1RpdGxlcyIsImFuaW1hdGlvaW5zUGFyYWdyYXBocyIsImFuaW1hdGlvaW5zTGFiZWxzIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4Iiwib25Nb3VzZVdoZWVsRXZlbnQiLCJvbk1vdXNlV2hlZWwiLCJiaW5kIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlQW5pbWF0aW9ucyIsImFuaW1hdGlvbnMiLCJtYXAiLCJUaXRsZSIsInB1c2giLCJQYXJhZ3JhcGgiLCJMYWJlbCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImZyb21UbyIsImF1dG9BbHBoYSIsImNhbGwiLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFuaW1hdGlvbk91dCIsInRvIiwib25Db21wbGV0ZSIsImV2ZW50IiwicGl4ZWxZIiwibm9ybWFsaXplV2hlZWwiLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImFuaW1hdGlvbiIsInVwZGF0ZSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==