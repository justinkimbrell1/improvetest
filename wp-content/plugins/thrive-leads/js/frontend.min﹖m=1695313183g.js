(()=>{window.TL_Front=window.TL_Front||{},window.ThriveGlobal=window.ThriveGlobal||{$j:jQuery.noConflict()};var t=!1;TL_Front.add_page_css=function(t){ThriveGlobal.$j.each(t,(function(t,e){if(t+="-css",-1!==(e=e.replace(/^http(s)?:\/\//,"//")).indexOf("thrive_flat")){var o=document.createElement("div");if(o.classList.add("tve-cb"),document.body.append(o),"both"===getComputedStyle(o).clear)return void o.remove();o.remove()}ThriveGlobal.$j("#"+t).length||ThriveGlobal.$j('link[href="http:'+e+'"]').length||ThriveGlobal.$j('link[href="https:'+e+'"]').length||ThriveGlobal.$j('<link rel="stylesheet" id="'+t+'" type="text/css" href="'+e+'"/>').prependTo("head")}))},TL_Front.lightspeed_assets=function(e){var o=function(){return ThriveGlobal.$j('link[href*="thrive_flat.css"]').length>0},r=[];if(e.css){if(e.css.files)for(var n in e.css.files){var a="flat"===n;(!o()&&a||!a)&&ThriveGlobal.$j('<link rel="stylesheet" href="'+e.css.files[n]+'"/>').prependTo("head")}e.css.inline&&e.css.inline.length&&e.css.inline.forEach((function(t){o()||ThriveGlobal.$j(t).prependTo("head")}))}if(e.js)for(var i in e.js)TCB_Front&&!TCB_Front.isModuleLoaded(i)&&r.push(i);!function o(){if(r.length){var n=r.shift();TL_Front.add_head_script(e.js[n],"tl-lightspeed-"+n,o)}else t=!0}()},TL_Front.conditional_display=function(t){void 0!==t&&t.lazy_load_conditional_preview&&tcb_condition_sets&&t.lazy_load_conditional_preview.forEach((function(t){-1===tcb_condition_sets.findIndex((function(e){return e.key===t.key}))&&tcb_condition_sets.push(t)}))},TL_Front.$document=ThriveGlobal.$j(document),TL_Front.extendConst=function(t){TL_Const.current_screen&&delete t.current_screen,ThriveGlobal.$j.extend(!0,TL_Const,t)},TL_Front.document_write=function(t){ThriveGlobal.$j("body").append(t)},TL_Front.add_head_script=function(t,e,o){var r=document.createElement("script"),n=ThriveGlobal.$j("head")[0];r.async=!0,"function"==typeof o&&(r.onload=r.onreadystatechange=o),void 0!==e&&(r.id=e),r.src=t,n.insertBefore(r,n.firstChild)},TL_Front.add_page_js=function(t,e){"function"!=typeof e&&(e=function(){});var o=0;ThriveGlobal.$j.each(t,(function(t,e){if("tve_frontend"===t&&"undefined"!=typeof TCB_Front)return!0;if(t+="-js",e&&!ThriveGlobal.$j("#"+t).length&&!ThriveGlobal.$j('script[src="'+e+'"]').length){if(o++,-1!==e.indexOf("connect.facebook.net"))return TL_Front.add_head_script(e,t,(function(){o--})),!0;ThriveGlobal.$j.getScript(e,(function(){o--}))}})),function t(){0!==o?setTimeout(t,50):e()}()},TL_Front.do_impression=function(){var t=TL_Front.impressions_data;if(void 0!==t){var e={security:TL_Const.security,action:TL_Const.action_impression,tl_data:t,current_screen:TL_Const.current_screen};ThriveGlobal.$j.each(TL_Const.custom_post_data,(function(t,o){e[t]=o})),window.TVE_Dash&&!TVE_Dash.ajax_sent?TVE_Dash.add_load_item("tl_impression",e):ThriveGlobal.$j.post(TL_Const.ajax_url,e)}else console.log("No form to register impression for !")},ThriveGlobal.$j((function(){if("undefined"!=typeof TL_Const){if(ThriveGlobal.$j(".tve-leads-screen-filler iframe, .tve-leads-ribbon iframe").not(".thrv_social_default iframe").not(".tcb-dr-done").each((function(){var t=ThriveGlobal.$j(this).addClass("tcb-dr-done");t.attr("src")&&t.attr("data-src",t.attr("src")),t.attr("src","")})),"undefined"!=typeof TCB_Front&&ThriveGlobal.$j(TCB_Front).on("content_loaded.thrive",(function(t,e){e.find(".tve-tl-anim").each((function(){var t=ThriveGlobal.$j(this);ThriveGlobal.$j(TL_Front).trigger("showform.thriveleads",{$target:t})}))})),ThriveGlobal.$j(window).on("tcb_after_dom_ready",(function(){if(!tve_frontend_options.is_editor_page){var t=TCB_Front.queryString.get("post_type");t&&"tve_lead_2s_lightbox"===t&&setTimeout((function(){TCB_Front.handleIframes(ThriveGlobal.$j(".tve_p_lb_content"))}),100)}})),ThriveGlobal.$j(TL_Front).on("showform.thriveleads",(function(t,e){var o,r=e.$target?e.$target:ThriveGlobal.$j("."+e.form_id);r.length&&(e.TargetEvent&&"exit"===e.TargetEvent.tve_trigger&&r.data("shown-on-exit")||(e.first&&(r=r.first()),r.attr("data-s-state")&&(r=r.closest(".tl-states-root").find('[data-state="'+r.attr("data-s-state")+'"] .tl-lb-target')),e&&e.$parentStateEl&&r.closest(".tl-style").first().data("parentStateEl",e.$parentStateEl),o=r.hasClass("tve-tl-anim")?r:r.find(".tve-tl-anim"),r.css("display",""),setTimeout((function(){o.addClass("tve-leads-triggered"),TL_Front.handle_typefocus(o,"start"),ThriveGlobal.$j(".tve_post_grid_masonry").length&&TCB_Front.postGridLayout()}),0),"function"==typeof TL_Front["open_"+e.form_type]?TL_Front["open_"+e.form_type](r,e.TargetEvent):r.show(),TCB_Front.resizePageSection(),r.on("switchstate",(function(t,e){e.offset().top-ThriveGlobal.$j(window).scrollTop()+e.outerHeight()<0&&ThriveGlobal.$j("html, body").animate({scrollTop:e.offset().top+"px"},50),TCB_Front.resizePageSection()})),setTimeout((function(){r.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe").each((function(){var t=ThriveGlobal.$j(this);t.attr("data-src")&&t.attr("src",t.attr("data-src"))}))}),200)))})),ThriveGlobal.$j("body").on("click",".tve-ribbon-close",(function(){var t=ThriveGlobal.$j(this).closest(".tve-leads-ribbon"),e=t.data("position");t.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each((function(){var t=ThriveGlobal.$j(this);t.attr("data-src",t.attr("src")),t.attr("src","")})),t.removeClass("tve-leads-triggered"),"top"===e?ThriveGlobal.$j("body").animate({marginTop:0},200,(function(){document.body.style.removeProperty("margin-top"),TCB_Front&&TCB_Front.$window&&TCB_Front.$window.trigger("scroll")})):"bottom"===e&&ThriveGlobal.$j("body").animate({marginBottom:"0px"},200,(function(){document.body.style.removeProperty("margin-bottom")})),TL_Front.handle_typefocus(t,"pause"),setTimeout((function(){t.css(e,"")}),400),ThriveGlobal.$j("#tve-lg-error-container").hide()})),ThriveGlobal.$j(window).on("conditional_display_loaded",(function(){var t=Object.keys(TL_Front.contentHtml||{});t.length&&t.forEach((function(t){var e=ThriveGlobal.$j(".tl-placeholder-f-type-".concat(t));if(e.length){var o=ThriveGlobal.$j(TL_Front.contentHtml[t]);e.replaceWith(o),setTimeout((function(){ThriveGlobal.$j(TL_Front).trigger("showform.thriveleads",{$target:o})}))}}))})),TL_Const.ajax_load||TL_Front.do_impression(),TL_Front.ajax_load_callback=function(o,n){if(n&&TL_Front.conditional_display(n),o&&o.res&&o.js&&o.html){var a,i;if(TL_Front.lightspeed_assets(o.lightspeed||{}),TL_Front.add_page_css(o.res.css),TL_Front.add_page_css(o.res.fonts),o.html&&(o.html.widget||ThriveGlobal.$j(".tl-widget-container").remove(),ThriveGlobal.$j.each(o.html,(function(t,e){if(!e)return!0;if(TL_Front.contentHtml=TL_Front.contentHtml||{},TL_Front.contentHtml[t]=e,"in_content"===t){var r=parseInt(o.in_content_pos),n="after",a=ThriveGlobal.$j(".tve-tl-cnt-wrap");a.length||(a=ThriveGlobal.$j("#tve_editor.tar-main-content"));var i=a.find("p").filter(":visible").not(".thrv_table p, form p, .tcb-post-list p, .thrv_text_element div p, p.wp-caption-text, .thrv_responsive_video p, .thrv_header p");0===i.length&&0===r?a.prepend(e):(0===r&&(r=1,n="before"),i.eq(r-1)[n](e))}else{var s=ThriveGlobal.$j(".tl-placeholder-f-type-"+t);if(o.js[t]&&o.js[t].content_locking){var l=s.parents(".tve_content_lock").first();if(o.js[t].has_conversion)return s.remove(),l.removeClass("tve_lock_hide"),!0;"tve_lock_blur"===o.js[t].lock&&l.removeClass("tve_lock_hide").addClass(o.js[t].lock)}"widget"===t?s.hasClass("tl-preload-form")?s.first().replaceWith(ThriveGlobal.$j(e).addClass("tve-leads-triggered")):(s.replaceWith(e),ThriveGlobal.$j(".tl-widget-container").children().unwrap()):s.replaceWith(e),0===t.indexOf("two_step")&&(c=t,ThriveGlobal.$j(".tl-2step-trigger-".concat(c.replace("two_step_",""))).show())}var c})),i=-1,"Microsoft Internet Explorer"==navigator.appName?(a=navigator.userAgent,null!==new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(a)&&(i=parseFloat(RegExp.$1))):"Netscape"==navigator.appName&&(a=navigator.userAgent,null!==new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})").exec(a)&&(i=parseFloat(RegExp.$1))),i>0&&setTimeout((function(){var t="";ThriveGlobal.$j("body style.tve_custom_style").each((function(){t=this.innerText,this.innerText=t}))}))),o.body_end){var s=ThriveGlobal.$j(o.body_end);s.find(".tve_wistia_popover").each((function(){ThriveGlobal.$j("#"+this.id).length&&this.parentNode.removeChild(this)})),s.filter("link[href]").each((function(){ThriveGlobal.$j('link[href="'+this.getAttribute("href")+'"]').length&&(s=s.not(this))})),s.filter("script[src]").each((function(){ThriveGlobal.$j('script[src="'+this.getAttribute("src")+'"]').length&&(s=s.not(this))}));try{ThriveGlobal.$j("body").append(s)}catch(t){console.log("Body append: "+t)}}void 0!==o.js.TVO_Form&&(TVO_Form=o.js.TVO_Form),TL_Front.add_page_js(o.res.js,(function(){e=!0})),setTimeout((function o(){e&&t?(TCB_Front.event_triggers(ThriveGlobal.$j("body")),TCB_Front.onDOMReady(),r(),ThriveGlobal.$j(TCB_Front).trigger("tl-ajax-loaded"),TCB_Front.add_scroll_callback((function(){var t=ThriveGlobal.$j('.tve-leads-ribbon[data-position="top"]'),e=t.find(".tve_shortcode_editor"),o=t.is(":visible")&&Number(t.css("opacity"))?Math.max(t.outerHeight(),e.outerHeight()):0,r=ThriveGlobal.$j('[data-elementor-type="header"] .elementor-top-section.elementor-sticky.elementor-sticky--active');r.length||(r=ThriveGlobal.$j(".she-header")),r.length&&r[0].style.setProperty("margin-top",o+"px","important")}))):setTimeout(o,50)}),50),TL_Const.forms=o.js,setTimeout((function(){ThriveGlobal.$j(".tl-preload-form").remove()}),1e3)}},TL_Const.ajax_load){var e=!1,o=(ThriveGlobal.$j(".tve-leads-two-step-trigger").hide(),{tcb_js:"undefined"!=typeof TCB_Front?1:0,main_group_id:TL_Const.main_group_id,shortcode_ids:TL_Const.shortcode_ids,two_step_ids:TL_Const.two_step_ids,action:"tve_leads_ajax_load_forms",security:TL_Const.security,display_options:TL_Const.display_options,current_screen:TL_Const.current_screen});return ThriveGlobal.$j.each(TL_Const.custom_post_data,(function(t,e){o[t]=e})),void(window.TVE_Dash&&!TVE_Dash.ajax_sent?ThriveGlobal.$j(document).on("tve-dash.load",(function(t){TVE_Dash.add_load_item("tl_lazy_load",o,TL_Front.ajax_load_callback)})):ThriveGlobal.$j.ajax({url:TL_Const.ajax_url,type:"post",dataType:"json",data:o,xhrFields:{withCredentials:!0}}).done(TL_Front.ajax_load_callback))}r()}function r(){if(!TL_Const.forms)return!1;function t(t){if(t.find('[data-validation="email"]').length)return t.find('[data-validation="email"]').val();var e="";return t.find("input").each((function(){if(this.name&&this.name.match(/email/i))return e=this.value,!1})),e}ThriveGlobal.$j("body").on("submit",".tve-leads-conversion-object form",(function(e){var o=ThriveGlobal.$j(this),r=o.parents(".tve-leads-conversion-object").first().attr("data-tl-type"),n={};if(o.data("tve-force-submit")||o.closest(".thrv_custom_html_shortcode").length||o.data("tl-do-submit")||!r||!TL_Const.forms[r]||function(t){var e=t.attr("id"),o=window.fluentFormVars,r=!1;return o&&o.forms&&(r=o.forms.some((function(t){return t.form_id_selector===e}))),r}(o)||function(t){var e=t.attr("id");return e&&e.includes("happyforms")&&window.HappyForms}(o))return!0;o.tve_form_loading(),o.find("input").each((function(){var t=ThriveGlobal.$j(this),e=t.attr("name");void 0!==e&&-1===TL_Const.ignored_fields.indexOf(e)&&(n[t.attr("name")]=t.val())}));var a={security:TL_Const.security,action:TL_Const.action_conversion,type:r,tl_data:TL_Const.forms[r],custom_fields:n,email:t(o),current_screen:TL_Const.current_screen};return ThriveGlobal.$j.each(TL_Const.custom_post_data,(function(t,e){a[t]=e})),ThriveGlobal.$j.ajax({url:TL_Const.ajax_url,data:a,type:"post",xhrFields:{withCredentials:!0}}).always((function(){void 0===o.attr("action")?location.reload():o.data("tve-force-submit",!0).submit()})),!1})),ThriveGlobal.$j("body").on("form_conversion.tcb",".tve-leads-conversion-object form",(function(t){var e=ThriveGlobal.$j(this).parents(".tve-leads-conversion-object").first().attr("data-tl-type");if(!e||!TL_Const.hasOwnProperty("forms")||!TL_Const.forms[e])return!0;var o={type:e,tl_data:TL_Const.forms[e],current_screen:TL_Const.current_screen};ThriveGlobal.$j.each(TL_Const.custom_post_data,(function(t,e){o[t]=e})),t.post_data=t.post_data||{},t.post_data.thrive_leads=o})).on("lead_conversion_success.tcb",".tve_lead_lock_shortcode form, .tve_post_lightbox form",(function(t){var e=ThriveGlobal.$j(this),o=e.parents(".tve_content_lock");if(e.closest(".tve_post_lightbox").length){var r=e.closest(".tve-leads-conversion-object").attr("data-tl-type");TL_Front.parent_state&&TL_Front.parent_state.parent().hasClass("tve-leads-track-"+r)&&(o=TL_Front.parent_state.closest(".tve_content_lock"))}o.length&&o.hasClass("tve_content_lock")&&(o.removeClass("tve_lead_lock").find(".tve_lead_lock_shortcode").remove(),o.find(".tve_lead_locked_overlay").remove(),t.content_unlocked=!0)})).on("leads_states.tcb",".tve-leads-conversion-object form",(function(t,e){var o=ThriveGlobal.$j(this);switch(o.find("#_form_type").val()){case"ribbon":var r=o.parents(".tve-leads-ribbon");o.parents(".tve_shortcode_editor").empty().html(e),TL_Front.open_ribbon(r);break;case"lightbox":case"tve_lead_2s_lightbox":o.parents(".tve_p_lb_control").empty().html(e);break;case"widget":case"in-content":case"post-footer":case"php-insert":o.parents(".tve_shortcode_editor").empty().html(e);break;case"slide-in":var n=o.parents(".tve-leads-slide-in");o.parents(".tve_shortcode_editor").empty().html(e),TL_Front.open_slide_in(n);break;case"screen-filler-lightbox":var a=o.parents(".tve-leads-screen-filler");o.parents(".tve_shortcode_editor").empty().html(e),TL_Front.open_screen_filler(a);break;case"scroll-mat":r=o.parents(".tve-leads-greedy_ribbon"),o.parents(".tve_shortcode_editor").empty().html(e),TL_Front.open_ribbon(r);break;case"tve_lead_shortcode":o.parents(".tve-leads-shortcode").empty().html(e);break;default:t.change_states=!1}t.change_states=!0})).on("leads_messages.tcb",".tve-leads-conversion-object form",(function(t){var e=ThriveGlobal.$j(this);switch(e.find("#_form_type").val()){case"tve_lead_shortcode":t.lightbox_state&&e.parents(".tve-leads-shortcode").hide();break;case"ribbon":e.parents(".thrv-ribbon").find(".tve-ribbon-close").click();break;case"lightbox":case"tve_lead_2s_lightbox":e.parents(".tve_p_lb_content").find(".tve_p_lb_close").click(),e.parents(".tve-leads-screen-filler").find(".tve-screen-filler-close").click();break;case"slide-in":e.parents(".thrv-leads-slide-in").find(".tve-leads-close").click();break;case"screen-filler-lightbox":e.parents(".tve-leads-screen-filler").find(".tve-screen-filler-close").click();break;case"scroll-mat":e.parents(".thrv-greedy-ribbon").find(".tve_et_click").click();break;default:e.find('input:not(:hidden):not([type="checkbox"]):not([type="radio"])').val("")}e.parents(".tve-leads-conversion-object").find(".tve_ea_thrive_leads_form_close").click(),TL_Front.parent_state&&TL_Front.close_form(TL_Front.parent_state)})),TL_Front.$document.on("switchstate",(function(t,e){e.find("script.tcb-lazyload-template").each((function(){ThriveGlobal.$j(this).replaceWith(this.innerHTML)}))}))}})),TL_Front.switch_lightbox_state=function(t,e){return t.find(".tve_p_lb_overlay").css("opacity","0.8"),t.find(".tve_p_lb_content").css("top",e.find(".tve_p_lb_content").css("top")).addClass("tve-leads-triggered"),window.tve_lb_switch_state=!0,TL_Front.open_lightbox(t.find(".tl-lb-target"))},TL_Front.close_lightbox=function(){var t=ThriveGlobal.$j("body"),e=ThriveGlobal.$j("html"),o="tve-o-hidden tve-l-open tve-hide-overflow",r=arguments[0]||t.data("tl-open-lightbox");r&&r.length&&(r.find(".tve-tl-anim").removeClass("tve-leads-triggered"),window.tve_lb_switch_state||(1===ThriveGlobal.$j(".tve_lb_open").length&&(t.removeClass(o).css("padding-right",""),e.removeClass(o),r.data("doc-scroll-top")?(document.documentElement.scrollTop=r.data("doc-scroll-top"),r.data("doc-scroll-top","")):r.data("bdy-scroll-top")&&(document.body.scrollTop=r.data("bdy-scroll-top"),r.data("bdy-scroll-top",""))),e.removeClass(e.data("tl-anim-class"))),window.tve_lb_switch_state=!1,setTimeout((function(){r.addClass("tve_lb_closing"),r.removeClass("tve_lb_open tve_lb_opening tve_lb_closing tve_p_lb_background").css("display","none").find("tve_p_lb_content").trigger("tve.lightbox-close")}),200),r.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each((function(){var t=ThriveGlobal.$j(this);t.attr("data-src",t.attr("src")),t.attr("src","")})),TL_Front.handle_typefocus(r,"pause"),ThriveGlobal.$j("#tve-lg-error-container").hide())},TL_Front.open_lightbox=function(t,e){if(!t.hasClass("tve_lb_open")&&!t.hasClass("tve_lb_opening")){var o=window.tve_lb_switch_state;ThriveGlobal.$j.fn.thrive_iphone_placeholder&&t.find("input[placeholder]").thrive_iphone_placeholder(),TL_Front.close_lightbox(ThriveGlobal.$j(".tve_p_lb_background.tve_lb_open")),t.css({visibility:"",position:"",left:"",display:""}).parents(".tl-style").css({visibility:"",position:"",left:"",display:""});var r,n,a,i,s,l=ThriveGlobal.$j("body"),c=ThriveGlobal.$j("html"),d="tve-o-hidden tve-l-open tve-hide-overflow",_=(r=ThriveGlobal.$j,n={border:"none",height:"200px",margin:"0",padding:"0",width:"200px"},a=r("<div>").css(r.extend({},n)),i=r("<div>").css(r.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},n)).append(a).appendTo("body").scrollLeft(1e3).scrollTop(1e3),s={height:i.offset().top-a.offset().top||0,width:i.offset().left-a.offset().left||0},i.remove(),s).width,v=parseInt(l.css("paddingRight")),h=ThriveGlobal.$j(".tve_p_lb_background.tve_lb_open").length;isNaN(v)&&(v=0),t.find(".tve_p_lb_close").off().on("click",(function(){return TL_Front.close_lightbox(),!1})),l.off("keyup.tve_lb_close").on("keyup.tve_lb_close",(function(t){if(27==t.which)return TL_Front.close_lightbox(),!1})),t.find(".tve_p_lb_overlay").off("click.tve_lb_close").on("click.tve_lb_close",(function(){return TL_Front.close_lightbox(),!1})),l.data("tl-open-lightbox",t),t.addClass("tve_p_lb_background"),t.data("doc-scroll-top",document.documentElement.scrollTop),t.data("bdy-scroll-top",document.body.scrollTop),l.addClass(d),c.addClass(d);var p=ThriveGlobal.$j(window).height()<ThriveGlobal.$j(document).height();!o&&p&&l.css("padding-right",v+_+"px"),t.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each((function(){var t=jQuery(this);t.attr("data-src")&&t.attr("src",t.attr("data-src"))})),t.find(".thrv_responsive_video").each((function(){var t=ThriveGlobal.$j(this);TCB_Front.makeAutoplayVideo(t)}));var f="";ThriveGlobal.$j.each(t.parents(".tl-states-root").attr("class").split(" "),(function(t,e){if(0===e.indexOf("tl-anim"))return f=e,!1})),c.addClass(f).data("tl-anim-class",f),setTimeout((function(){function e(){var e=t.find(".tve_p_lb_content").outerHeight(!0)+2*parseInt(t.css("padding-top")),o=t.find(".tve_p_lb_content"),r=ThriveGlobal.$j(window).height(),n=(r-e)/2;t.find(".tve_p_lb_overlay").css({height:e+80+"px","min-height":r+"px"}),h?o.animate({top:n<40?40:n},100):o.css("top",(n<40?40:n)+"px"),e+40>r&&t.addClass("tve-scroll")}setTimeout((function(){t.addClass("tve_lb_opening")}),0),t.find("iframe").not(".thrv_social_default iframe").each((function(){var t=ThriveGlobal.$j(this);!t.data("tve_ifr_loaded")&&t.attr("data-src")&&t.data("tve_ifr_loaded",1).attr("src",t.attr("data-src"))})),TCB_Front.resizePageSection(),e(),ThriveGlobal.$j(window).on("resize",e)}),20),setTimeout((function(){t.removeClass("tve_lb_opening").addClass("tve_lb_open").find(".tve_p_lb_content").trigger("tve.lightbox-open"),ThriveGlobal.$j(window).trigger("scroll")}),300),e&&e.preventDefault&&(e.preventDefault(),e.stopPropagation()),t.parents(".tl-states-root").off("switchstate").on("switchstate",(function(t,e){var o=Array.prototype.slice.call(arguments,1);TL_Front.switch_lightbox_state.apply(TL_Front,o)})),e&&"exit"===e.tve_trigger&&t.data("shown-on-exit",!0),TCB_Front.$window.trigger("tl_after_lightbox_open",t),setTimeout((function(){TCB_Front.$window.trigger("tve_after_content_toggle",[t])}),500)}},TL_Front.open_two_step_lightbox=TL_Front.open_lightbox,TL_Front.open_ribbon=function(t){function e(){t.addClass("tve-leads-triggered");var e=t.find(".tve_shortcode_editor"),o=e.length?e.outerHeight():0,r=t.attr("data-position")||"top";switch(r){case"above":t.css("bottom","auto");case"top":t.css("top",ThriveGlobal.$j("#wpadminbar").length?"32px":"0px");break;case"bottom":t.css("bottom","0px"),t.css("top","auto")}var n=0,a=Math.max(t.outerHeight(),o),i=setInterval((function(){n++;var e=Math.max(t.outerHeight(),o);e==a&&10!=n||clearInterval(i),"top"===r?(ThriveGlobal.$j("body").animate({"margin-top":e+"px"},200,(function(){document.body.style.setProperty("margin-top",e+"px","important")})),TCB_Front&&TCB_Front.$window&&TCB_Front.$window.trigger("scroll")):"bottom"===r&&ThriveGlobal.$j("body").animate({"margin-bottom":e+"px"},200)}),100),s=ThriveGlobal.$j("body").find(".thrv_header.tve-scroll-sticky");if(s.length&&"top"===r){var l=parseFloat(TCB_Front.inlineCssVariable(s,"--tcb-header-extra-offset"))||0;TCB_Front.inlineCssVariable(s,"--tcb-header-extra-offset",l+a+"px")}t.off("switchstate").on("switchstate",(function(t,e){var o=Array.prototype.slice.call(arguments,1);TL_Front.switch_ribbon_state.apply(TL_Front,o)}))}TL_Const.forms.greedy_ribbon?(TL_Const.close_callbacks=TL_Const.close_callbacks||{},TL_Const.close_callbacks.greedy_ribbon=[e]):e()},TL_Front.switch_ribbon_state=function(t){var e=t.outerHeight(!0),o={};o["top"===t.parent().attr("data-position")?"margin-top":"margin-bottom"]=e+"px",t.find(".tve-tl-anim").removeClass((function(t,e){return(e.match(/(^|\s)tl-anim-\S+/g)||[]).join(" ")})).removeClass("tve-tl-anim"),ThriveGlobal.$j("body").animate(o,200)},TL_Front.open_greedy_ribbon=function(t){var e=ThriveGlobal.$j("body"),o=ThriveGlobal.$j(window),r=e.css("position");o.scrollTop(0),e.css("position","static"),e.addClass("tve-tl-gr-anim"),TCB_Front.$window.trigger("scroll"),t.css("top",ThriveGlobal.$j("#wpadminbar").length?"32px":"0px");var n=t.outerHeight();e[0].style.setProperty("margin-top",n+"px","important");var a=1;setTimeout((function(){ThriveGlobal.$j('.tve-leads-ribbon[data-position="top"]').removeClass("tve-leads-triggered")}),50),o.scroll((function(){var i=e.hasClass("tve-tl-gr-anim");if(a&&i){var s=o.scrollTop();if(s>n){(t.find(".tve_ea_thrive_wistia").length||t.find(".tve_with_wistia_popover"))&&ThriveGlobal.$j(".wistia_placebo_close_button").trigger("click"),e.removeClass("tve-tl-gr-anim"),t.addClass("tve-no-animation");var l=s-n;t.removeClass("tve-leads-triggered"),t.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each((function(){var t=ThriveGlobal.$j(this);t.attr("data-src",t.attr("src")),t.attr("src","")})),e.css("margin-top",""),e.css("position",r),o.scrollTop(l),t.removeClass("tve-no-animation"),a=0,TL_Front.form_closed("greedy_ribbon"),TL_Const.forms.greedy_ribbon.allow_callbacks=!1}}})),t.off("switchstate").on("switchstate",(function(t,e){}))},TL_Front.open_screen_filler=function(t,e){var o="tve-so-hidden tve-sl-open tve-s-hide-overflow",r=ThriveGlobal.$j("html,body"),n=ThriveGlobal.$j("html");if(ThriveGlobal.$j.fn.thrive_iphone_placeholder&&t.find("input[placeholder]").thrive_iphone_placeholder(),t.css("top",ThriveGlobal.$j("#wpadminbar").length?"32px":"0px").css("visibility",""),!0===t.hasClass("stl-anim-slip_from_top")){var a=ThriveGlobal.$j(window).scrollTop();t.css("top",a).css("visibility","")}t.find(".tve-screen-filler-close").on("click",(function(){s(t)})),t.data("doc-scroll-top",document.documentElement.scrollTop),t.data("bdy-scroll-top",document.body.scrollTop),"none"!==t.find(".thrv-leads-screen-filler.thrv_wrapper ").css("display")&&r.addClass(o);var i="";function s(t){t.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each((function(){var t=ThriveGlobal.$j(this);t.attr("data-src",t.attr("src")),t.attr("src","")})),t.removeClass("tve-leads-triggered"),TL_Front.handle_typefocus(t,"pause"),ThriveGlobal.$j(document).off("keyup.close-screenfiller"),0==ThriveGlobal.$j.find(".tve-leads-ribbon").length&&ThriveGlobal.$j("body").animate({"margin-top":"0px"},200),r.removeClass(o),n.removeClass(n.data("tl-s-anim-class")),setTimeout((function(){t.css("top","").hide(),"none"===t.css("display")&&(r.removeClass(o),t.removeClass("tve-leads-triggered"))}),400),t.data("doc-scroll-top")?(document.documentElement.scrollTop=t.data("doc-scroll-top"),t.data("doc-scroll-top","")):t.data("bdy-scroll-top")&&(document.body.scrollTop=t.data("bdy-scroll-top"),t.data("bdy-scroll-top","")),ThriveGlobal.$j("#tve-lg-error-container").hide()}ThriveGlobal.$j.each(t.attr("class").split(" "),(function(t,e){if(0===e.indexOf("stl-anim"))return i=e,!1})),n.addClass(i).data("tl-s-anim-class",i);var l=t.find("> .tl-style").hide(),c=t.find('> .tl-style[data-form-state="already_subscribed"]');c.length?c.show():l.first().show(),TL_Front.close_screen_filler=s,e&&e.preventDefault&&(e.preventDefault(),e.stopPropagation()),ThriveGlobal.$j(document).off("keyup.close-screenfiller").on("keyup.close-screenfiller",(function(e){27==e.which&&s(t)})),t.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each((function(){var t=jQuery(this);t.attr("data-src")&&t.attr("src",t.attr("data-src"))})),setTimeout((function(){TCB_Front.resizePageSection()}),500)},TL_Front.switch_slide_in_state=function(t){t.find(".tve-tl-anim").removeClass((function(t,e){return(e.match(/(^|\s)tl-anim-\S+/g)||[]).join(" ")})).removeClass("tve-tl-anim"),TL_Front.slide_in_position(t.find(".thrv-leads-slide-in"))},TL_Front.slide_in_position=function(t){var e=ThriveGlobal.$j(window),o=t.outerHeight();if(e.width()<=782||e.height()<o){t.parents(".tve-leads-slide-in").addClass("tve-lb");var r=e.height();setTimeout((function(){var e=(r-o)/2;t.closest(".tve-leads-slide-in").data("doc-scroll-top",document.documentElement.scrollTop).data("bdy-scroll-top",document.body.scrollTop),t.parents(".tve-leads-conversion-object").first().css({height:o+80+"px","min-height":r+"px"}),t.css("top",(e<40?40:e)+"px"),o+40>r&&t.parents(".tve-leads-slide-in").css("overflow-y","scroll")}),0)}},TL_Front.open_slide_in=function(t,e){var o="tve-o-hidden tve-l-open tve-hide-overflow",r=ThriveGlobal.$j("body"),n=ThriveGlobal.$j("html");function a(e){e.removeClass("tve-leads-triggered"),TL_Front.handle_typefocus(e,"pause"),ThriveGlobal.$j(document).off("keyup.close-slidein"),ThriveGlobal.$j(".tve_lb_open").length||(r.removeClass(o),n.removeClass(o)),e.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each((function(){var t=ThriveGlobal.$j(this);t.attr("data-src",t.attr("src")),t.attr("src","")})),ThriveGlobal.$j("#tve-lg-error-container").hide(),t.data("doc-scroll-top")?(document.documentElement.scrollTop=t.data("doc-scroll-top"),t.data("doc-scroll-top","")):t.data("bdy-scroll-top")&&(document.body.scrollTop=t.data("bdy-scroll-top"),t.data("bdy-scroll-top",""))}ThriveGlobal.$j.fn.thrive_iphone_placeholder&&t.find("input[placeholder]").thrive_iphone_placeholder(),TL_Front.slide_in_position(t.find(".thrv-leads-slide-in").filter(":visible")),t.off().on("click",".tve-leads-close",(function(){a(t)})),t.find(".tve_ea_thrive_leads_form_close").on("click",(function(){a(t)})),t.on("switchstate",(function(t,e){var o=Array.prototype.slice.call(arguments,1);TL_Front.switch_slide_in_state.apply(TL_Front,o)})),ThriveGlobal.$j(document).off("keyup.close-slidein").on("keyup.close-slidein",(function(e){27==e.which&&a(t)})),e&&e.preventDefault&&(e.preventDefault(),e.stopPropagation())},TL_Front.close_form=function(t,e,o,r){var n=ThriveGlobal.$j(t).parents(".tve-leads-triggered"),a=n.attr("data-tl-type");if(void 0===a&&n.hasClass("tve-leads-widget"))a="widget";else if(void 0===a&&n.hasClass("tve-leads-post-footer"))a="post-footer";else if(void 0===a&&n.hasClass("tve-leads-slide-in"))a="slide-in";else if(void 0===a&&n.hasClass("tve-leads-in-content"))a="in-content";else if(void 0===a&&n.hasClass("tve-leads-shortcode"))a="shortcode";else if(void 0===a&&n.hasClass("tve-leads-greedy_ribbon"))a="greedy_ribbon";else{if(void 0===a&&n.hasClass("tve_p_lb_content"))return TL_Front.close_lightbox(),!1;if(void 0===a&&n.hasClass("tve-leads-screen-filler"))return TL_Front.close_screen_filler(n),!1}switch(n.removeClass("tve-leads-triggered"),TL_Front.handle_typefocus(n,"pause"),a){case"ribbon":var i=n.find(".tve-ribbon-close");i.length||(i=jQuery('<span class="tve-ribbon-close" style="display: none"></span>').appendTo(n)),i.trigger("click");var s=ThriveGlobal.$j("body").find(".thrv_header.tve-scroll-sticky");if(s.length&&"top"===n.attr("data-position")){var l=parseFloat(TCB_Front.inlineCssVariable(s,"--tcb-header-extra-offset"))-n.outerHeight(!0)+"px";TCB_Front.inlineCssVariable(s,"--tcb-header-extra-offset",l)}break;case"slide-in":n.find(".tve_ea_thrive_leads_form_close").trigger("click"),n.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each((function(){var t=ThriveGlobal.$j(this);t.attr("data-src",t.attr("src")),t.attr("src","")}));break;case"post-footer":case"in-content":case"shortcode":n.fadeOut(200,(function(){TL_Front.form_closed(a)}));break;case"widget":n.parent().slideUp(200);break;case"greedy_ribbon":var c=ThriveGlobal.$j("body"),d=ThriveGlobal.$j(window),_=c.css("margin-top");c[0].style.removeProperty("margin-top"),n.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each((function(){var t=ThriveGlobal.$j(this);t.attr("data-src",t.attr("src")),t.attr("src","")})),c.css("margin-top",_),d.scrollTop(0),c.animate({"margin-top":"0px"},300,"linear",(function(){TL_Front.form_closed(a)})).removeClass("tve-tl-gr-anim")}},TL_Front.form_closed=function(t){TL_Const.close_callbacks&&TL_Const.close_callbacks[t]&&ThriveGlobal.$j.each(TL_Const.close_callbacks[t],(function(t,e){ThriveGlobal.$j.isFunction(e)&&e()}))},TL_Front.handle_typefocus=function(t,e){t.find(".tve_typefocus").each((function(){jQuery(this).attr("data-typefocus",e)}))}})();