// Navigation system for lessons
class LessonNavigation {
    constructor() {
        this.htmlLessons = [
            { id: 'html-overview', title: 'نظرة عامة', file: 'html-overview.html' },
            { id: 'html-editors', title: 'المحررات', file: 'html-editors.html' },
            { id: 'html-basics', title: 'أساسيات اللغة', file: 'html-basics.html' },
            { id: 'html-paragraphs', title: 'الفقرات', file: 'html-paragraphs.html' },
            { id: 'html-headings', title: 'العناوين', file: 'html-headings.html' },
            { id: 'text-formatting', title: 'تنسيق النصوص', file: 'text-formatting.html' },
            { id: 'html-quotes', title: 'الإقتباسات', file: 'html-quotes.html' },
            { id: 'code-formatting', title: 'تنسيق الكود', file: 'code-formatting.html' },
            { id: 'html-links', title: 'الروابط', file: 'html-links.html' },
            { id: 'html-tables', title: 'الجداول', file: 'html-tables.html' },
            { id: 'ordered-lists', title: 'القوائم المرتبة', file: 'ordered-lists.html' },
            { id: 'unordered-lists', title: 'القوائم الغير مرتبة', file: 'unordered-lists.html' },
            { id: 'description-lists', title: 'قوائم الوصف', file: 'description-lists.html' },
            { id: 'file-paths', title: 'مسارات الملفات', file: 'file-paths.html' },
            { id: 'html-images', title: 'الصور', file: 'html-images.html' },
            { id: 'html-videos', title: 'الفيديوهات', file: 'html-videos.html' },
            { id: 'html-audio', title: 'الصوتيات', file: 'html-audio.html' },
            { id: 'html-frames', title: 'الأطر', file: 'html-frames.html' },
            { id: 'html-forms', title: 'النماذج', file: 'html-forms.html' },
            { id: 'element-labels', title: 'عنونة العناصر', file: 'element-labels.html' },
            { id: 'input-fields', title: 'حقول الإدخال', file: 'input-fields.html' },
            { id: 'buttons', title: 'الأزرار العادية', file: 'buttons.html' },
            { id: 'checkboxes', title: 'خانات الإختيار', file: 'checkboxes.html' },
            { id: 'radio-buttons', title: 'أزرار الراديو', file: 'radio-buttons.html' },
            { id: 'dropdown-menus', title: 'القوائم المنسدلة', file: 'dropdown-menus.html' },
            { id: 'range-inputs', title: 'نطاقات الإختيار', file: 'range-inputs.html' },
            { id: 'grouping-elements', title: 'تجميع العناصر', file: 'grouping-elements.html' },
            { id: 'content-direction', title: 'تحديد إتجاه المحتوى', file: 'content-direction.html' },
            { id: 'language-codes', title: 'رموز اللغات', file: 'language-codes.html' },
            { id: 'country-codes', title: 'رموز البلدان', file: 'country-codes.html' },
            { id: 'translated-pages', title: 'الصفحات المترجمة', file: 'translated-pages.html' },
            { id: 'all-tags', title: 'جميع الوسوم', file: 'all-tags.html' },
            { id: 'currency-symbols', title: 'رموز العملات', file: 'currency-symbols.html' },
            { id: 'arrow-symbols', title: 'رموز الأسهم', file: 'arrow-symbols.html' },
            { id: 'punctuation-symbols', title: 'رموز التنقيط', file: 'punctuation-symbols.html' },
            { id: 'geometric-shapes', title: 'الرموز الهندسية', file: 'geometric-shapes.html' },
            { id: 'math-symbols', title: 'رموز الرياضيات', file: 'math-symbols.html' },
            { id: 'border-symbols', title: 'رموز الحدود', file: 'border-symbols.html' },
            { id: 'block-symbols', title: 'رموز الكتل', file: 'block-symbols.html' },
            { id: 'typography-symbols', title: 'رموز الطباعة', file: 'typography-symbols.html' },
            { id: 'letter-like-symbols', title: 'رموز الحروف', file: 'letter-like-symbols.html' },
            { id: 'misc-symbols', title: 'رموز متنوعة', file: 'misc-symbols.html' },
            { id: 'emoji-symbols', title: 'رموز الإيموجي', file: 'emoji-symbols.html' },
            { id: 'emoji-color', title: 'إيموجي ملونة', file: 'emoji-color.html' }
        ];

        this.cssLessons = [
            { id: 'css-overview', title: 'نظرة عامة على CSS', file: 'Css-overview.html' },
            { id: 'css-comments', title: 'التعليقات في CSS', file: 'Css-comments.html' },
            { id: 'css-official-interface', title: 'الواجهة الرسمية', file: 'Css-Official_interface.html' },
            { id: 'css-interface', title: 'الواجهة التفاعلية', file: 'Css-interface.html' },
            { id: 'css-display', title: 'خاصية Display', file: 'Css-display_block_fiex.html' },
            { id: 'css-float', title: 'خاصية Float', file: 'Css-float.html' },
            { id: 'css-clear', title: 'خاصية Clear', file: 'Css-clear.html' },
            { id: 'css-box-sizing', title: 'Box Sizing', file: 'Css-box_sizing.html' },
            { id: 'css-overflow', title: 'خاصية Overflow', file: 'Css-overflow.html' },
            { id: 'css-texts', title: 'تنسيق النصوص', file: 'Css-texts.html' },
            { id: 'css-links', title: 'تنسيق الروابط', file: 'Css-links.html' },
            { id: 'css-lists', title: 'تنسيق القوائم', file: 'Css-lists.html' },
            { id: 'css-tables', title: 'تنسيق الجداول', file: 'Css-tables.html' },
            { id: 'css-outline', title: 'الحدود الخارجية', file: 'Css-outline.html' },
            { id: 'css-shadows', title: 'الظلال', file: 'Css-shadows.html' },
            { id: 'css-pseudo-classes', title: 'الفئات الوهمية', file: 'Css-pseudo_classes.html' },
            { id: 'css-navbar', title: 'شريط التنقل', file: 'Css-navbar.html' },
            { id: 'css-dropdowns', title: 'القوائم المنسدلة', file: 'Css-dropdowns.html' },
            { id: 'css-icons', title: 'الأيقونات', file: 'Css-lcon.html' },
            { id: 'css-enum', title: 'التعدادات', file: 'Css-Enum.html' },
            { id: 'css-cram', title: 'التكديس', file: 'Css-cram.html' }
        ];

        this.init();
    }

    init() {
        this.createNavigationButtons();
        this.addProgressTracking();
    }

    getCurrentLesson() {
        const currentFile = window.location.pathname.split('/').pop();
        const currentPath = window.location.pathname;
        
        if (currentPath.includes('/html/')) {
            return this.htmlLessons.find(lesson => lesson.file === currentFile);
        } else if (currentPath.includes('/css/')) {
            return this.cssLessons.find(lesson => lesson.file === currentFile);
        }
        
        return null;
    }

    getCurrentLessonIndex() {
        const currentLesson = this.getCurrentLesson();
        if (!currentLesson) return -1;

        const currentPath = window.location.pathname;
        if (currentPath.includes('/html/')) {
            return this.htmlLessons.findIndex(lesson => lesson.id === currentLesson.id);
        } else if (currentPath.includes('/css/')) {
            return this.cssLessons.findIndex(lesson => lesson.id === currentLesson.id);
        }

        return -1;
    }

    getLessonsArray() {
        const currentPath = window.location.pathname;
        if (currentPath.includes('/html/')) {
            return this.htmlLessons;
        } else if (currentPath.includes('/css/')) {
            return this.cssLessons;
        }
        return [];
    }

    createNavigationButtons() {
        const currentIndex = this.getCurrentLessonIndex();
        const lessons = this.getLessonsArray();
        
        if (currentIndex === -1 || lessons.length === 0) return;

        const navContainer = document.createElement('div');
        navContainer.className = 'lesson-navigation';
        navContainer.innerHTML = `
            <div class="nav-buttons">
                ${currentIndex > 0 ? 
                    `<a href="${lessons[currentIndex - 1].file}" class="nav-btn prev-btn">
                        <span class="nav-icon">❮</span>
                        <div class="nav-text">
                            <small>الدرس السابق</small>
                            <strong>${lessons[currentIndex - 1].title}</strong>
                        </div>
                    </a>` : 
                    `<a href="index.html" class="nav-btn home-btn">
                        <span class="nav-icon">🏠</span>
                        <div class="nav-text">
                            <small>العودة إلى</small>
                            <strong>قائمة الدروس</strong>
                        </div>
                    </a>`
                }
                
                <div class="lesson-info">
                    <span class="lesson-counter">${currentIndex + 1} من ${lessons.length}</span>
                    <div class="progress-indicator">
                        <div class="progress-bar-mini">
                            <div class="progress-fill-mini" style="width: ${((currentIndex + 1) / lessons.length) * 100}%"></div>
                        </div>
                    </div>
                </div>

                ${currentIndex < lessons.length - 1 ? 
                    `<a href="${lessons[currentIndex + 1].file}" class="nav-btn next-btn">
                        <div class="nav-text">
                            <small>الدرس التالي</small>
                            <strong>${lessons[currentIndex + 1].title}</strong>
                        </div>
                        <span class="nav-icon">❯</span>
                    </a>` : 
                    `<a href="../index.html" class="nav-btn complete-btn">
                        <div class="nav-text">
                            <small>تهانينا!</small>
                            <strong>أكملت الدورة</strong>
                        </div>
                        <span class="nav-icon">🎉</span>
                    </a>`
                }
            </div>
        `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .lesson-navigation {
                margin: 3rem 0;
                padding: 2rem;
                background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                border-radius: 15px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            }

            .nav-buttons {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
                flex-wrap: wrap;
            }

            .nav-btn {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                padding: 1rem 1.5rem;
                background: white;
                border: 2px solid #e9ecef;
                border-radius: 12px;
                text-decoration: none;
                color: #2c3e50;
                transition: all 0.3s ease;
                box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                min-width: 200px;
            }

            .nav-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                border-color: #3498db;
            }

            .prev-btn:hover {
                border-color: #3498db;
                background: linear-gradient(135deg, #3498db, #2980b9);
                color: white;
            }

            .next-btn:hover {
                border-color: #27ae60;
                background: linear-gradient(135deg, #27ae60, #229954);
                color: white;
            }

            .complete-btn:hover {
                border-color: #f39c12;
                background: linear-gradient(135deg, #f39c12, #e67e22);
                color: white;
            }

            .home-btn:hover {
                border-color: #9b59b6;
                background: linear-gradient(135deg, #9b59b6, #8e44ad);
                color: white;
            }

            .nav-icon {
                font-size: 1.2rem;
                font-weight: bold;
            }

            .nav-text small {
                display: block;
                font-size: 0.8rem;
                opacity: 0.7;
                margin-bottom: 0.2rem;
            }

            .nav-text strong {
                display: block;
                font-size: 0.95rem;
                font-weight: 600;
            }

            .lesson-info {
                text-align: center;
                flex: 1;
                min-width: 150px;
            }

            .lesson-counter {
                display: block;
                font-weight: 600;
                color: #2c3e50;
                margin-bottom: 0.5rem;
            }

            .progress-bar-mini {
                width: 100%;
                height: 6px;
                background: #e9ecef;
                border-radius: 3px;
                overflow: hidden;
            }

            .progress-fill-mini {
                height: 100%;
                background: linear-gradient(90deg, #3498db, #27ae60);
                border-radius: 3px;
                transition: width 0.3s ease;
            }

            @media (max-width: 768px) {
                .nav-buttons {
                    flex-direction: column;
                }

                .nav-btn {
                    width: 100%;
                    justify-content: center;
                    min-width: auto;
                }

                .lesson-info {
                    order: -1;
                    margin-bottom: 1rem;
                }
            }
        `;

        document.head.appendChild(style);

        // Insert navigation buttons before footer
        const footer = document.querySelector('footer');
        if (footer) {
            footer.parentNode.insertBefore(navContainer, footer);
        } else {
            document.body.appendChild(navContainer);
        }
    }

    addProgressTracking() {
        // Add progress tracking
        const currentIndex = this.getCurrentLessonIndex();
        const lessons = this.getLessonsArray();
        
        if (currentIndex !== -1 && lessons.length > 0) {
            const progress = ((currentIndex + 1) / lessons.length) * 100;
            
            // Update progress bar if exists
            const progressFill = document.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }

            // Update progress text
            const progressText = document.querySelector('.progress-text');
            if (progressText) {
                progressText.textContent = `تم إكمال ${currentIndex + 1} من ${lessons.length} درس (${Math.round(progress)}%)`;
            }
        }
    }
}

// Initialize navigation system when page loads
document.addEventListener('DOMContentLoaded', function() {
    new LessonNavigation();
});

// Add additional interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add typing animation for main titles
    const animateText = (element) => {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid #3498db';
        
        let i = 0;
        const timer = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(timer);
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 500);
            }
        }, 50);
    };

    // Apply typing animation to main title
    const mainTitle = document.querySelector('header h1');
    if (mainTitle && !mainTitle.querySelector('a')) {
        setTimeout(() => animateText(mainTitle), 500);
    }
});

