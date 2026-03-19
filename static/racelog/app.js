

        const { useState, useMemo, useEffect } = React;

        // Simple SVG Icons as components
        const Clock = ({ size = 24, className = "" }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        );

        const Trophy = ({ size = 24, className = "" }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
        );

        const Activity = ({ size = 24, className = "" }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
        );

        const MapPin = ({ size = 24, className = "" }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        );

        const Mountain = ({ size = 24, className = "" }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            </svg>
        );

        const Waves = ({ size = 24, className = "", fill = "none" }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
            </svg>
        );

        const Flame = ({ size = 24, className = "" }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
            </svg>
        );

        const Sun = ({ size = 24, className = "" }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
        );

        const Moon = ({ size = 24, className = "" }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        );

        const X = ({ size = 24, className = "" }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        );

        // --- Components ---

        // Search Modal Component
        const SearchModal = ({ isOpen, onClose, searchQuery, setSearchQuery, filteredRaces }) => {
            const inputRef = React.useRef(null);

            React.useEffect(() => {
                if (isOpen && inputRef.current) {
                    inputRef.current.focus();
                }
            }, [isOpen]);

            React.useEffect(() => {
                const handleEscape = (e) => {
                    if (e.key === 'Escape') {
                        onClose();
                    }
                };

                if (isOpen) {
                    document.addEventListener('keydown', handleEscape);
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'unset';
                }

                return () => {
                    document.removeEventListener('keydown', handleEscape);
                    document.body.style.overflow = 'unset';
                };
            }, [isOpen, onClose]);

            if (!isOpen) return null;

            return (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4" onClick={onClose}>
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

                    {/* Search Container */}
                    <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        {/* Search Input */}
                        <div className="flex items-center gap-3 p-4 border-b border-neutral-200 dark:border-neutral-700">
                            <Activity size={20} className="text-neutral-400" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search races by name, location, or category..."
                                className="flex-1 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 outline-none text-lg"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            )}
                            <button
                                onClick={onClose}
                                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Search Results */}
                        <div className="max-h-96 overflow-y-auto p-4">
                            {searchQuery ? (
                                filteredRaces.length > 0 ? (
                                    <div className="space-y-3">
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                                            Found {filteredRaces.length} race{filteredRaces.length !== 1 ? 's' : ''}
                                        </p>
                                        {filteredRaces.map((race) => (
                                            <div
                                                key={race.id}
                                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                                                onClick={() => {
                                                    // Scroll to race card
                                                    onClose();
                                                    setTimeout(() => {
                                                        const element = document.querySelector(`[data-race-id="${race.id}"]`);
                                                        if (element) {
                                                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                        }
                                                    }, 100);
                                                }}
                                            >
                                                <img
                                                    src={race.image}
                                                    alt={race.title}
                                                    className="w-16 h-16 rounded-lg object-cover"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-bold text-neutral-900 dark:text-neutral-100 truncate">
                                                        {race.title}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                                        <span>{race.location}</span>
                                                        <span>•</span>
                                                        <span>{race.category}</span>
                                                        <span>•</span>
                                                        <span>{race.month} {race.year}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="flex items-center gap-1 text-sm font-mono font-bold text-teal-500">
                                                        <Clock size={14} />
                                                        {race.finishTime}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-neutral-400">
                                        <div className="inline-block p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 mb-4">
                                            <Activity size={32} className="opacity-20" />
                                        </div>
                                        <p>No races found matching "{searchQuery}"</p>
                                        <p className="text-sm mt-2">Try searching by name, location, or category</p>
                                    </div>
                                )
                            ) : (
                                <div className="text-center py-12 text-neutral-400">
                                    <Activity size={32} className="opacity-20 mx-auto mb-4" />
                                    <p>Start typing to search races...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        };

        const StatsHeader = ({ stats }) => (
            <div className="w-full max-w-7xl mx-auto mb-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-8 px-6 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-xl rounded-3xl border border-white/20 shadow-sm relative">
                    {/* Count */}
                    <div className="text-center group cursor-default md:col-span-1 col-span-2">
                        <div className="text-4xl font-black text-neutral-800 dark:text-neutral-100 group-hover:text-teal-500 transition-colors">{stats.count || 0}</div>
                        <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-2 uppercase tracking-wider group-hover:text-teal-500/70 transition-colors">Completed</div>
                    </div>

                    {/* Dividers for Desktop */}
                    <div className="hidden md:block absolute top-8 bottom-8 left-[20%] w-px bg-neutral-200 dark:bg-neutral-700" />
                    <div className="hidden md:block absolute top-8 bottom-8 left-[40%] w-px bg-neutral-200 dark:bg-neutral-700" />
                    <div className="hidden md:block absolute top-8 bottom-8 left-[60%] w-px bg-neutral-200 dark:bg-neutral-700" />
                    <div className="hidden md:block absolute top-8 bottom-8 left-[80%] w-px bg-neutral-200 dark:bg-neutral-700" />

                    {/* Full Marathon */}
                    <div className="text-center group cursor-default">
                        <div className="text-3xl font-black text-neutral-800 dark:text-neutral-100 group-hover:text-teal-500 transition-colors">{stats.fullMarathonPB}</div>
                        <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-2 uppercase tracking-wider group-hover:text-teal-500/70 transition-colors">Marathon</div>
                    </div>

                    {/* Half Marathon */}
                    <div className="text-center group cursor-default">
                        <div className="text-3xl font-black text-neutral-800 dark:text-neutral-100 group-hover:text-teal-500 transition-colors">{stats.halfMarathonPB}</div>
                        <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-2 uppercase tracking-wider group-hover:text-teal-500/70 transition-colors">Half Marathon</div>
                    </div>

                    {/* Full Ironman */}
                    <div className="text-center group cursor-default">
                        <div className="text-3xl font-black text-neutral-800 dark:text-neutral-100 group-hover:text-teal-500 transition-colors">{stats.fullIronmanPB}</div>
                        <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-2 uppercase tracking-wider group-hover:text-teal-500/70 transition-colors">Ironman</div>
                    </div>

                    {/* Ironman 70.3 */}
                    <div className="text-center group cursor-default">
                        <div className="text-3xl font-black text-neutral-800 dark:text-neutral-100 group-hover:text-teal-500 transition-colors">{stats.ironman703PB}</div>
                        <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-2 uppercase tracking-wider group-hover:text-teal-500/70 transition-colors">IM 70.3</div>
                    </div>
                </div>
            </div>
        );

        const FilterBar = ({ activeFilter, setFilter }) => {
            const filters = [
                { id: 'all', icon: Flame, label: '全部', color: 'text-neutral-600 dark:text-neutral-300' },
                { id: 'marathon', icon: Activity, label: '马拉松', color: 'text-teal-500' },
                { id: 'triathlon', icon: Trophy, label: '铁人三项', color: 'text-indigo-500' },
                { id: 'trail', icon: Mountain, label: '越野', color: 'text-amber-500' },
            ];

            return (
                <div className="flex justify-center gap-4 mb-12">
                    <div className="inline-flex p-1.5 bg-neutral-200/50 dark:bg-neutral-800/50 backdrop-blur-md rounded-2xl">
                        {filters.map((f) => {
                            const isActive = activeFilter === f.id;
                            const Icon = f.icon;
                            return (
                                <button
                                    key={f.id}
                                    onClick={() => setFilter(f.id)}
                                    className={`
                        relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300
                        ${isActive
                                            ? 'bg-white dark:bg-neutral-700 shadow-md scale-100'
                                            : 'hover:bg-white/50 dark:hover:bg-neutral-700/50 scale-95 opacity-70 hover:opacity-100'
                                        }
                      `}
                                >
                                    <Icon
                                        size={18}
                                        className={isActive ? f.color : 'text-neutral-500'}
                                    />
                                    <span className={isActive ? 'text-neutral-800 dark:text-neutral-100' : 'text-neutral-500'}
                                    >
                                        {f.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            );
        };

        // Countdown Component for Upcoming Races
        const Countdown = ({ targetDate, raceTitle }) => {
            const [timeLeft, setTimeLeft] = useState(null);

            React.useEffect(() => {
                const calculateTimeLeft = () => {
                    const now = new Date();
                    const target = new Date(targetDate);
                    const difference = target - now;

                    if (difference > 0) {
                        return {
                            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                            minutes: Math.floor((difference / 1000 / 60) % 60),
                            seconds: Math.floor((difference / 1000) % 60)
                        };
                    }
                    return null;
                };

                // Initial calculation
                setTimeLeft(calculateTimeLeft());

                // Update every second
                const timer = setInterval(() => {
                    setTimeLeft(calculateTimeLeft());
                }, 1000);

                return () => clearInterval(timer);
            }, [targetDate]);

            if (!timeLeft) return null;

            return (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-teal-500 via-indigo-500 to-purple-600 relative overflow-hidden">
                    {/* Animated background circles */}
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                    {/* Race title */}
                    <div className="text-white/90 text-sm font-medium mb-8 px-6 text-center z-10">
                        倒计时开始
                    </div>

                    {/* Countdown grid */}
                    <div className="grid grid-cols-4 gap-3 px-4 z-10">
                        {/* Days */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-3 min-w-[60px] border border-white/30 shadow-lg">
                                <div className="text-4xl font-black text-white text-center leading-none">{timeLeft.days}</div>
                            </div>
                            <div className="text-xs text-white/80 mt-2 font-bold">天</div>
                        </div>

                        {/* Hours */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-3 min-w-[60px] border border-white/30 shadow-lg">
                                <div className="text-4xl font-black text-white text-center leading-none">{String(timeLeft.hours).padStart(2, '0')}</div>
                            </div>
                            <div className="text-xs text-white/80 mt-2 font-bold">时</div>
                        </div>

                        {/* Minutes */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-3 min-w-[60px] border border-white/30 shadow-lg">
                                <div className="text-4xl font-black text-white text-center leading-none">{String(timeLeft.minutes).padStart(2, '0')}</div>
                            </div>
                            <div className="text-xs text-white/80 mt-2 font-bold">分</div>
                        </div>

                        {/* Seconds */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-3 min-w-[60px] border border-white/30 shadow-lg">
                                <div className="text-4xl font-black text-white text-center leading-none">{String(timeLeft.seconds).padStart(2, '0')}</div>
                            </div>
                            <div className="text-xs text-white/80 mt-2 font-bold">秒</div>
                        </div>
                    </div>

                    {/* Coming soon text */}
                    <div className="mt-8 text-white/70 text-xs font-medium tracking-wider uppercase z-10">
                        Coming Soon
                    </div>
                </div>
            );
        };

        // Upcoming Races Section Component
        const UpcomingRacesSection = ({ upcomingRaces }) => {
            if (!upcomingRaces || upcomingRaces.length === 0) return null;

            return (
                <div className="mb-12">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-3xl font-black text-neutral-800 dark:text-neutral-100 mb-2">
                            即将开始的比赛
                        </h2>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Upcoming Races
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {upcomingRaces.map((race) => (
                            <div key={race.id} className="group relative w-full break-inside-avoid">
                                <div className="relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-[400px]">
                                    {/* Date Badge */}
                                    <div className="absolute top-4 right-4 z-30 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm shadow-sm border border-white/20 px-3 py-2 rounded-xl flex flex-col items-center min-w-[50px]">
                                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{race.month}</span>
                                        <span className="text-lg font-black text-neutral-800 dark:text-neutral-200 leading-none">{race.year}</span>
                                    </div>

                                    {/* Countdown Display */}
                                    <div className="w-full h-full relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                                        <Countdown targetDate={race.date} raceTitle={race.title} />

                                        {/* Overlay Info */}
                                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white">
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                <div className={`
                                                    inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg backdrop-blur-md border text-xs font-bold tracking-wide
                                                    ${race.type === 'marathon' ? 'bg-teal-500/20 border-teal-500/30 text-teal-300' : ''}
                                                    ${race.type === 'triathlon' ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' : ''}
                                                    ${race.type === 'trail' ? 'bg-amber-500/20 border-amber-500/30 text-amber-300' : ''}
                                                `}>
                                                    {race.type === 'marathon' && <Activity size={12} />}
                                                    {race.type === 'triathlon' && <Trophy size={12} />}
                                                    {race.type === 'trail' && <Mountain size={12} />}
                                                    {race.category}
                                                </div>
                                                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white/80">
                                                    <MapPin size={10} /> {race.location}
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold leading-tight text-shadow-sm">
                                                {race.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };

        const RaceCard = ({ race }) => {
            return (
                <div className="group relative w-full h-full break-inside-avoid" data-race-id={race.id}>
                    <div className="relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-[400px]">

                        {/* Date Badge - Floating */}
                        <div className="absolute top-4 right-4 z-30 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm shadow-sm border border-white/20 px-3 py-2 rounded-xl flex flex-col items-center min-w-[50px]">
                            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{race.month}</span>
                            <span className="text-lg font-black text-neutral-800 dark:text-neutral-200 leading-none">{race.year}</span>
                        </div>

                        {/* Image Background */}
                        <div className="w-full h-full relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                            <img
                                src={race.image}
                                alt={race.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay Info */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white">
                                {/* Tags Row */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <div className={`
                          inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg backdrop-blur-md border text-xs font-bold tracking-wide
                          ${race.type === 'marathon' ? 'bg-teal-500/20 border-teal-500/30 text-teal-300' : ''}
                          ${race.type === 'triathlon' ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' : ''}
                          ${race.type === 'trail' ? 'bg-amber-500/20 border-amber-500/30 text-amber-300' : ''}
                        `}>
                                        {race.type === 'marathon' && <Activity size={12} />}
                                        {race.type === 'triathlon' && <Trophy size={12} />}
                                        {race.type === 'trail' && <Mountain size={12} />}
                                        {race.category}
                                    </div>

                                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white/80">
                                        <MapPin size={10} /> {race.location}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold leading-tight mb-3 text-shadow-sm group-hover:text-teal-400 transition-colors">
                                    {race.title}
                                </h3>

                                <div className="flex items-center gap-6 border-t border-white/10 pt-3">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase text-white/40 font-bold tracking-wider mb-0.5">Finish Time</span>
                                        <div className="flex items-center gap-1.5 font-mono text-lg font-bold text-white">
                                            <Clock size={14} className="text-teal-400" />
                                            {race.finishTime}
                                        </div>
                                    </div>

                                    {race.pace && (
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase text-white/40 font-bold tracking-wider mb-0.5">Pace</span>
                                            <div className="flex items-center gap-1.5 font-mono text-lg font-bold text-white">
                                                <Activity size={14} className="text-teal-400" />
                                                {race.pace}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const App = () => {
            // State Management
            const [filter, setFilter] = useState('all');
            const [searchQuery, setSearchQuery] = useState('');
            const [isSearchVisible, setIsSearchVisible] = useState(false);

            // Data State
            const [rawRaces, setRawRaces] = useState([]);
            const [loading, setLoading] = useState(true);

            // Fetch Data
            useEffect(() => {
                // Data loaded from races.js
                const rawData = window.RACE_DATA || [];

                // Simulate network delay slightly for effect
                setTimeout(() => {
                    const racesWithDate = rawData.map((r, index) => ({
                        ...r,
                        id: `race-${index}`,
                        dateObj: new Date(r.date)
                    }));
                    setRawRaces(racesWithDate);
                    setLoading(false);
                }, 300);
            }, []);

            // Sorting and Filtering Logic - Include ALL races
            const processedRaces = useMemo(() => {
                let data = [...rawRaces];
                // No longer filtering out upcoming races here, processedRaces will contain all races
                data.sort((a, b) => b.dateObj - a.dateObj); // Default sort by date descending

                // Filter by type (marathon/triathlon/trail)
                if (filter !== 'all') {
                    data = data.filter(r => r.type === filter);
                }

                // Filter by search query
                if (searchQuery.trim()) {
                    const query = searchQuery.toLowerCase().trim();
                    data = data.filter(race => {
                        return (
                            race.title.toLowerCase().includes(query) ||
                            race.location.toLowerCase().includes(query) ||
                            race.category.toLowerCase().includes(query)
                        );
                    });
                }

                return data;
            }, [rawRaces, filter, searchQuery]);

            // Split into upcoming and completed races from filtered results
            const upcomingFiltered = useMemo(() => {
                const now = new Date();
                return processedRaces
                    .filter(r => new Date(r.date) > now)
                    .sort((a, b) => a.dateObj - b.dateObj); // Sort upcoming by date ascending (nearest first)
            }, [processedRaces]);

            const completedFiltered = useMemo(() => {
                const now = new Date();
                return processedRaces
                    .filter(r => new Date(r.date) <= now)
                    .sort((a, b) => b.dateObj - a.dateObj); // Sort completed by date descending (most recent first)
            }, [processedRaces]);

            // Toggle search modal
            const toggleSearch = () => {
                setIsSearchVisible(!isSearchVisible);
                if (!isSearchVisible) {
                    setSearchQuery('');
                }
            };

            // Calculate Stats - Exclude upcoming races
            const stats = useMemo(() => {
                const now = new Date();
                // Only count completed races (past races)
                const completedRaces = rawRaces.filter(r => new Date(r.date) <= now);
                const completed = completedRaces.length;

                // Categories - only from completed races
                const fullMarathons = completedRaces.filter(r => r.category === 'Full Marathon');
                const halfMarathons = completedRaces.filter(r => r.category === 'Half Marathon');
                const fullIronmans = completedRaces.filter(r => r.category === 'IRONMAN' || r.category === 'IRONMAN Full' || r.category === 'Full Distance' || (r.type === 'triathlon' && r.category.includes('Full')));
                const ironman703s = completedRaces.filter(r => r.category === 'IRONMAN 70.3' || r.category === 'Olympic Distance');

                // Helper to convert "H:MM:SS" to seconds
                const timeToSeconds = (timeStr) => {
                    if (!timeStr || timeStr === 'loading') return Infinity;
                    const parts = timeStr.split(':').map(Number);
                    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
                    if (parts.length === 2) return parts[0] * 3600 + parts[1] * 60;
                    return Infinity;
                };

                const getBestTime = (races) => {
                    if (!races || races.length === 0) return "Starting";
                    return [...races].sort((a, b) => timeToSeconds(a.finishTime) - timeToSeconds(b.finishTime))[0].finishTime;
                };

                return {
                    count: completed,
                    fullMarathonPB: getBestTime(fullMarathons),
                    halfMarathonPB: getBestTime(halfMarathons),
                    fullIronmanPB: getBestTime(fullIronmans),
                    ironman703PB: getBestTime(ironman703s)
                };
            }, [rawRaces]);

            return (
                <>
                    <div className="min-h-screen bg-neutral dark:bg-neutral-800 text-neutral-900 dark:text-neutral font-sans selection:bg-teal-500/30 pb-20">
                        {/* Search Modal */}
                        <SearchModal
                            isOpen={isSearchVisible}
                            onClose={() => setIsSearchVisible(false)}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            filteredRaces={processedRaces}
                        />

                        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-[5px]">

                            {/* Header Section */}
                            <header className="mb-16 md:mb-24 pt-0 md:pt-4 text-center relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-teal-500/20 blur-[100px] rounded-full pointer-events-none"></div>
                                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-neutral-900 dark:text-neutral-50 relative z-10">
                                    RACE<span className="text-teal-500">LOG</span>
                                </h1>
                                <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                                    Tracking every mile, every transition, and every finish line. <br className="hidden md:inline" />A digital trophy room of endurance.
                                </p>
                            </header>

                            {/* Main Content Area */}
                            <main>
                                {/* Top Stats Section */}
                                <StatsHeader stats={stats} />

                                {/* Filter Tabs */}
                                <FilterBar activeFilter={filter} setFilter={setFilter} />

                                {/* Upcoming Races Section (if any after filtering) */}
                                {upcomingFiltered.length > 0 && (
                                    <div className="mb-12">
                                        <div className="text-center mb-6">
                                            <h2 className="text-2xl md:text-3xl font-black text-neutral-800 dark:text-neutral-100 mb-2">
                                                即将开始的比赛
                                            </h2>
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                Upcoming Races
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                            {upcomingFiltered.map((race) => (
                                                <div key={race.id} className="group relative w-full break-inside-avoid">
                                                    <div className="relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-[400px]">
                                                        {/* Date Badge */}
                                                        <div className="absolute top-4 right-4 z-30 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm shadow-sm border border-white/20 px-3 py-2 rounded-xl flex flex-col items-center min-w-[50px]">
                                                            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{race.month}</span>
                                                            <span className="text-lg font-black text-neutral-800 dark:text-neutral-200 leading-none">{race.year}</span>
                                                        </div>

                                                        {/* Countdown Display */}
                                                        <div className="w-full h-full relative">
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                                                            <Countdown targetDate={race.date} raceTitle={race.title} />

                                                            {/* Overlay Info */}
                                                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white">
                                                                <div className="flex flex-wrap gap-2 mb-3">
                                                                    <div className={`
                                                                    inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg backdrop-blur-md border text-xs font-bold tracking-wide
                                                                    ${race.type === 'marathon' ? 'bg-teal-500/20 border-teal-500/30 text-teal-300' : ''}
                                                                    ${race.type === 'triathlon' ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' : ''}
                                                                    ${race.type === 'trail' ? 'bg-amber-500/20 border-amber-500/30 text-amber-300' : ''}
                                                                `}>
                                                                        {race.type === 'marathon' && <Activity size={12} />}
                                                                        {race.type === 'triathlon' && <Trophy size={12} />}
                                                                        {race.type === 'trail' && <Mountain size={12} />}
                                                                        {race.category}
                                                                    </div>
                                                                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white/80">
                                                                        <MapPin size={10} /> {race.location}
                                                                    </div>
                                                                </div>
                                                                <h3 className="text-2xl font-bold leading-tight text-shadow-sm">
                                                                    {race.title}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Completed Races Grid */}
                                {loading ? (
                                    <div className="text-center py-20">
                                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
                                        <p className="mt-4 text-neutral-400">Loading races...</p>
                                    </div>
                                ) : completedFiltered.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                        {completedFiltered.map((race, index) => (
                                            <div
                                                key={race.id}
                                                className="animate-fade-in-up"
                                                style={{ animationDelay: `${index * 100}ms` }}
                                            >
                                                <RaceCard race={race} />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-20 text-neutral-400">
                                        <div className="inline-block p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 mb-4">
                                            <Activity size={32} className="opacity-20" />
                                        </div>
                                        <p>No races found for this category.</p>
                                    </div>
                                )}
                            </main>

                            {/* Footer */}
                            <footer className="mt-24 py-12 text-center border-t border-neutral-200 dark:border-neutral-800/50">
                                <p className="text-neutral-400 text-sm">
                                    &copy; {new Date().getFullYear()} RaceLog. Keep Pushing.
                                </p>
                            </footer>
                        </div>
                    </div>
                </>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    
    