// LandingPage.jsx
import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    Avatar,
    Chip,
    Stack,
    Divider,
    Paper,
    IconButton,
    Fade,
    Slide
} from '@mui/material';
import {
    Computer,
    Chat,
    CloudUpload,
    Security,
    Speed,
    Devices,
    PlayArrow,
    GitHub,
    LinkedIn,
    Email,
    Star,
    CheckCircle,
    ArrowForward,
    Download,
    Language
} from '@mui/icons-material';

const LandingPage = ({ onGetStarted }) => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: <Computer />,
            title: "Partage d'écran en temps réel",
            description: "Partagez votre écran avec une qualité HD et une latence ultra-faible. Optimisé pour tous les appareils.",
            color: "#2196f3"
        },
        {
            icon: <Chat />,
            title: "Chat en direct",
            description: "Communiquez instantanément avec tous les participants grâce à notre système de chat intégré.",
            color: "#4caf50"
        },
        {
            icon: <CloudUpload />,
            title: "Transfert de fichiers",
            description: "Partagez des fichiers jusqu'à 50MB en toute sécurité avec chiffrement AES-256.",
            color: "#ff9800"
        },
        {
            icon: <Security />,
            title: "Sécurité avancée",
            description: "Chiffrement bout en bout, authentification sécurisée et protection des données.",
            color: "#9c27b0"
        }
    ];

    const teamMembers = [
        {
            name: "Alex Martin",
            role: "Lead Developer",
            avatar: "AM",
            description: "Expert en développement full-stack et architecture système",
            skills: ["React", "Java", "WebSocket", "Security"]
        },
        {
            name: "Sarah Johnson",
            role: "UI/UX Designer",
            avatar: "SJ",
            description: "Spécialiste en design d'interfaces utilisateur modernes",
            skills: ["Material-UI", "Responsive Design", "User Experience"]
        },
        {
            name: "David Chen",
            role: "Backend Engineer",
            avatar: "DC",
            description: "Expert en optimisation réseau et performance",
            skills: ["Java", "WebSocket", "Optimization", "Scalability"]
        }
    ];

    const stats = [
        { label: "Utilisateurs actifs", value: "10K+", icon: <Devices /> },
        { label: "Sessions par jour", value: "500+", icon: <Speed /> },
        { label: "Uptime", value: "99.9%", icon: <CheckCircle /> },
        { label: "Pays supportés", value: "50+", icon: <Language /> }
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                  background: 'linear-gradient(135deg, #15803d 0%, #065f46 100%)',

                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
                    `,
                    pointerEvents: 'none'
                }}
            />

            {/* Header */}
            <Box
                sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    py: 2,
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <Container maxWidth="xl">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="center" gap={2}>
                            <Computer sx={{ color: 'white', fontSize: 32 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
                                RemoteConnect Pro
                            </Typography>
                        </Box>
                        
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: 'rgba(255, 255, 255, 0.5)',
                                    '&:hover': {
                                        borderColor: 'white',
                                        background: 'rgba(255, 255, 255, 0.1)'
                                    }
                                }}
                                startIcon={<GitHub />}
                            >
                                GitHub
                            </Button>
                            <Button
                                variant="contained"
                                onClick={onGetStarted}
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    '&:hover': {
                                        background: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }}
                                endIcon={<ArrowForward />}
                            >
                                Commencer
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="xl" sx={{ py: 4, position: 'relative', zIndex: 1 }}>
                {/* Hero Section */}
                <Fade in={true} timeout={1000}>
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                mb: 3,
                                fontSize: { xs: '2.5rem', md: '3.5rem' }
                            }}
                        >
                            Partage d'écran
                            <Box component="span" sx={{ color: '#ffeb3b', ml: 2 }}>
                                nouvelle génération
                            </Box>
                        </Typography>
                        
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                mb: 4,
                                maxWidth: 800,
                                mx: 'auto',
                                lineHeight: 1.6
                            }}
                        >
                            Collaborez en temps réel avec un partage d'écran sécurisé, 
                            un chat intégré et un transfert de fichiers simplifié. 
                            Conçu pour les équipes modernes.
                        </Typography>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            justifyContent="center"
                            sx={{ mb: 6 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                onClick={onGetStarted}
                                sx={{
                                    background: 'linear-gradient(45deg, #4caf50, #8bc34a)',
                                    color: 'white',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #388e3c, #4caf50)'
                                    }
                                }}
                                startIcon={<PlayArrow />}
                            >
                                Démarrer maintenant
                            </Button>
                            
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    color: 'white',
                                    borderColor: 'rgba(255, 255, 255, 0.5)',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        borderColor: 'white',
                                        background: 'rgba(255, 255, 255, 0.1)'
                                    }
                                }}
                                startIcon={<Download />}
                            >
                                Télécharger
                            </Button>
                        </Stack>

                        {/* Stats */}
                        <Grid container spacing={3} justifyContent="center">
                            {stats.map((stat, index) => (
                                <Grid item xs={6} sm={3} key={index}>
                                    <Slide direction="up" in={true} timeout={1000 + index * 200}>
                                        <Paper
                                            sx={{
                                                p: 3,
                                                textAlign: 'center',
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                backdropFilter: 'blur(20px)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                color: 'white'
                                            }}
                                        >
                                            <Box sx={{ color: '#ffeb3b', mb: 1 }}>
                                                {stat.icon}
                                            </Box>
                                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                                {stat.value}
                                            </Typography>
                                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                                {stat.label}
                                            </Typography>
                                        </Paper>
                                    </Slide>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Fade>

                {/* Features Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant="h3"
                        textAlign="center"
                        sx={{ color: 'white', fontWeight: 'bold', mb: 6 }}
                    >
                        Fonctionnalités puissantes
                    </Typography>
                    
                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Slide direction="up" in={true} timeout={1200 + index * 200}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            background: 'rgba(255, 255, 255, 0.95)',
                                            backdropFilter: 'blur(20px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                                            }
                                        }}
                                        onClick={() => setActiveFeature(index)}
                                    >
                                        <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: 64,
                                                    height: 64,
                                                    borderRadius: '50%',
                                                    background: feature.color,
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mx: 'auto',
                                                    mb: 2
                                                }}
                                            >
                                                {feature.icon}
                                            </Box>
                                            
                                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                                {feature.title}
                                            </Typography>
                                            
                                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                                {feature.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Slide>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Team Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant="h3"
                        textAlign="center"
                        sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}
                    >
                        Notre équipe
                    </Typography>
                    
                    <Typography
                        variant="h6"
                        textAlign="center"
                        sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 6 }}
                    >
                        Des experts passionnés par l'innovation technologique
                    </Typography>
                    
                    <Grid container spacing={4} justifyContent="center">
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Slide direction="up" in={true} timeout={1400 + index * 200}>
                                    <Card
                                        sx={{
                                            background: 'rgba(255, 255, 255, 0.95)',
                                            backdropFilter: 'blur(20px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)'
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                            <Avatar
                                                sx={{
                                                    width: 80,
                                                    height: 80,
                                                    mx: 'auto',
                                                    mb: 2,
                                                    background: 'linear-gradient(45deg, #2196f3, #64b5f6)',
                                                    fontSize: '1.5rem',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                {member.avatar}
                                            </Avatar>
                                            
                                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                                {member.name}
                                            </Typography>
                                            
                                            <Chip
                                                label={member.role}
                                                color="primary"
                                                size="small"
                                                sx={{ mb: 2 }}
                                            />
                                            
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                {member.description}
                                            </Typography>
                                            
                                            <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
                                                {member.skills.map((skill, skillIndex) => (
                                                    <Chip
                                                        key={skillIndex}
                                                        label={skill}
                                                        size="small"
                                                        variant="outlined"
                                                        sx={{ fontSize: '0.75rem' }}
                                                    />
                                                ))}
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Slide>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* CTA Section */}
                <Fade in={true} timeout={2000}>
                    <Paper
                        sx={{
                            p: 6,
                            textAlign: 'center',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: 4
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}
                        >
                            Prêt à révolutionner votre collaboration ?
                        </Typography>
                        
                        <Typography
                            variant="h6"
                            sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 4 }}
                        >
                            Rejoignez des milliers d'équipes qui font confiance à RemoteConnect Pro
                        </Typography>
                        
                        <Button
                            variant="contained"
                            size="large"
                            onClick={onGetStarted}
                            sx={{
                                background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                                color: 'white',
                                px: 6,
                                py: 2,
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #e55a2b, #e8841a)',
                                    transform: 'scale(1.05)'
                                }
                            }}
                            endIcon={<ArrowForward />}
                        >
                            Commencer gratuitement
                        </Button>
                    </Paper>
                </Fade>
            </Container>

            {/* Footer */}
            <Box
                sx={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(20px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    py: 4,
                    mt: 8
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center" gap={2} sx={{ mb: 2 }}>
                                <Computer sx={{ color: 'white', fontSize: 28 }} />
                                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                                    RemoteConnect Pro
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                La solution de partage d'écran la plus avancée pour les équipes modernes.
                                Sécurisé, rapide et facile à utiliser.
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }} gap={2}>
                                <IconButton sx={{ color: 'white' }}>
                                    <GitHub />
                                </IconButton>
                                <IconButton sx={{ color: 'white' }}>
                                    <LinkedIn />
                                </IconButton>
                                <IconButton sx={{ color: 'white' }}>
                                    <Email />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                    
                    <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    
                    <Typography
                        variant="body2"
                        textAlign="center"
                        sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                        © 2025 RemoteConnect Pro. Tous droits réservés. 
                        Développé avec ❤️ par l'équipe RemoteConnect.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;
